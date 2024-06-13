package auth

import (
	"database/sql"
	"log"
	"net/http"

	"github.com/gin-contrib/cors"
	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/cookie"
	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
	"golang.org/x/crypto/bcrypt"
)

// エクスポートされたグローバル変数
var DB *sql.DB

func setupDB() {
	var err error
	DB, err = sql.Open("mysql", "root:root@tcp(localhost:3306)/univivid")
	if err != nil {
		log.Fatal(err)
	}

	// 接続確認
	if err := DB.Ping(); err != nil {
		log.Fatal(err)
	} else {
		log.Println("接続しました！")
	}
}

func RegisterRoutes(r *gin.Engine) {
	// CORSミドルウェアの設定
	r.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"},
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Accept", "Authorization"},
		AllowCredentials: true,
	}))

	store := cookie.NewStore([]byte("secret"))
	r.Use(sessions.Sessions("mysession", store))

	r.POST("/auth/register", registerHandler)
	r.POST("/auth/login", loginHandler)
	r.PUT("/auth/profile", profileEditHandler)

	setupDB()
	defer DB.Close()

	r.Run(":8080")
}

func loginHandler(c *gin.Context) {
	var request struct {
		Type        string `json:"type"` // "user" または "university"
		MailAddress string `json:"mailaddress"`
		Password    string `json:"password"`
	}

	if err := c.BindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "無効なリクエストです"})
		return
	}

	var storedPassword string
	var query string

	if request.Type == "user" {
		query = "SELECT password FROM USER WHERE Mail_Address = ?"
	} else if request.Type == "university" {
		query = "SELECT password FROM UNIVERSITY WHERE Mail_Address = ?"
	} else {
		c.JSON(http.StatusBadRequest, gin.H{"error": "無効なアカウントタイプです"})
		return
	}

	err := DB.QueryRow(query, request.MailAddress).Scan(&storedPassword)
	if err != nil {
		if err == sql.ErrNoRows {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "メールアドレスまたはパスワードが間違っています"})
		} else {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "サーバー内部エラー"})
		}
		return
	}

	// パスワーの比較
	if err := bcrypt.CompareHashAndPassword([]byte(storedPassword), []byte(request.Password)); err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "メールアドレスまたはパスワードが間違っています"})
		return
	}

	// セッションの開始
	session := sessions.Default(c)
	session.Set("mailaddress", request.MailAddress)
	if err := session.Save(); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "セッションの保存に失敗しました"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "ログインしました！"})
}

func registerHandler(c *gin.Context) {
	var request struct {
		Type        string `json:"type"` // "user" または "university"
		Username    string `json:"username"`
		MailAddress string `json:"mailaddress"`
		Password    string `json:"password"`
		UnivName    string `json:"univname,omitempty"`  // 大学の場合のみ
		InfoName    string `json:"infoname,omitempty"`  // 大学の場合のみ
		UnivURL     string `json:"univurl,omitempty"`   // 大学の場合のみ
		DonateURL   string `json:"donateurl,omitempty"` // 大学の場合のみ
	}

	if err := c.BindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "無効なリクエスです"})
		return
	}

	// パスワードのハッシュ化
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(request.Password), bcrypt.DefaultCost)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "パスワードのハッシュ化に失敗しました"})
		return
	}

	if request.Type == "user" {
		_, err = DB.Exec("INSERT INTO USER (Mail_Address, User_Name, Password) VALUES (?, ?, ?)", request.MailAddress, request.Username, string(hashedPassword))
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "サーバー内部エラー"})
			return
		}
		c.JSON(http.StatusOK, gin.H{"message": "ユーザーアカウントが作成されました！"})
	} else if request.Type == "university" {
		_, err = DB.Exec("INSERT INTO UNIVERSITY (Mail_Address, Password, Univ_Name, info_name, Univ_URL, donate_URL) VALUES (?, ?, ?, ?, ?, ?)", request.MailAddress, string(hashedPassword), request.UnivName, request.InfoName, request.UnivURL, request.DonateURL)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "サーバー内部エラー"})
			return
		}
		c.JSON(http.StatusOK, gin.H{"message": "大学アカウントが作成されました！"})
	} else {
		c.JSON(http.StatusBadRequest, gin.H{"error": "無効なアカウントタイプです"})
	}
}

func profileEditHandler(c *gin.Context) {
	var request struct {
		Type        string `json:"type"` // "user" または "university"
		MailAddress string `json:"mailaddress"`
		Username    string `json:"username,omitempty"`
		UnivName    string `json:"univname,omitempty"`
		InfoName    string `json:"infoname,omitempty"`
		UnivURL     string `json:"univurl,omitempty"`
		DonateURL   string `json:"donateurl,omitempty"`
		Password    string `json:"password,omitempty"`
	}

	if err := c.BindJSON(&request); err != nil {
		log.Println("JSONバインドエラー:", err)
		c.JSON(http.StatusBadRequest, gin.H{"error": "無効なリクエストです"})
		return
	}

	// パスワードのハッシュ化
	var hashedPassword []byte
	if request.Password != "" {
		var err error
		hashedPassword, err = bcrypt.GenerateFromPassword([]byte(request.Password), bcrypt.DefaultCost)
		if err != nil {
			log.Println("パスワードのハッシュ化に失敗しました:", err)
			c.JSON(http.StatusInternalServerError, gin.H{"error": "パスワードのハッシュ化に失敗しました"})
			return
		}
	}

	// セッションからメールアドレスを取得
	session := sessions.Default(c)
	mailAddress := session.Get("mailaddress")
	if mailAddress == nil {
		log.Println("セッションエラー: ログインが必要です")
		c.JSON(http.StatusUnauthorized, gin.H{"error": "ログインが必要です"})
		return
	}

	// セッションのメールアドレスを更新(ここを変えないともしメアドを編集した後にDBとセッション情報が嚙み合わなくなる)
	session.Set("mailaddress", request.MailAddress)
	if err := session.Save(); err != nil {
		log.Println("セッションの保存に失敗しました:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "セッションの保存に失敗しました"})
		return
	}

	// ユーザータイプに基づいて更新クエリを実行
	var err error
	if request.Type == "user" {
		_, err = DB.Exec("UPDATE USER SET User_Name = ?, Mail_Address = ?, Password = ? WHERE Mail_Address = ?", request.Username, request.MailAddress, string(hashedPassword), mailAddress)
	} else if request.Type == "university" {
		_, err = DB.Exec("UPDATE UNIVERSITY SET Univ_Name = ?, info_name = ?, Univ_URL = ?, donate_URL = ? WHERE Mail_Address = ?", request.UnivName, request.InfoName, request.UnivURL, request.DonateURL, mailAddress)
	} else {
		log.Println("無効なアカウントタイプ:", request.Type)
		c.JSON(http.StatusBadRequest, gin.H{"error": "無効なアカウントタイプです"})
		return
	}

	if err != nil {
		log.Println("データベースエラー:", err)
		c.JSON(http.StatusInternalServerError, gin.H{"error": "サーバー内部エラー"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "プロフィールが更新されました！"})
}
