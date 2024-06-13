package auth

import (
	"database/sql"
	"log"
	"net/http"

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
	setupDB()

	// セッションミドルウェアの設定
	store := cookie.NewStore([]byte("secret"))
	r.Use(sessions.Sessions("mysession", store))

	r.POST("/auth/login", loginHandler)
	r.POST("/auth/register", registerHandler)
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

	// パスワードの比較
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
		c.JSON(http.StatusBadRequest, gin.H{"error": "無効なリクエストです"})
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
