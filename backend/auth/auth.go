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
	r.GET("/auth/userinfo", userInfoHandler)
}

func loginHandler(c *gin.Context) {
	var request struct {
		Username string `json:"username"`
		Password string `json:"password"`
	}

	if err := c.BindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "無効なリクエストです"})
		return
	}

	var storedPassword string
	err := DB.QueryRow("SELECT password FROM users WHERE username = ?", request.Username).Scan(&storedPassword)
	if err != nil {
		if err == sql.ErrNoRows {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "ユーザー名またはパスワードが間違っています"})
		} else {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "サーバー内部エラー"})
		}
		return
	}

	// パスワードの比較
	if err := bcrypt.CompareHashAndPassword([]byte(storedPassword), []byte(request.Password)); err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "ユーザー名またはパスワードが間違っています"})
		return
	}

	// セッションの開始
	session := sessions.Default(c)
	session.Set("username", request.Username)
	if err := session.Save(); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "セッションの保存に失敗しました"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "ログインしました！"})
}

func registerHandler(c *gin.Context) {
	var request struct {
		Username string `json:"username"`
		Password string `json:"password"`
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

	_, err = DB.Exec("INSERT INTO users (username, password) VALUES (?, ?)", request.Username, string(hashedPassword))
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "サーバー内部エラー"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "アカウントが作成されました！"})
}

func userInfoHandler(c *gin.Context) {
	session := sessions.Default(c)
	username := session.Get("username")
	if username == nil {
		var request struct {
			Username string `json:"username"`
			Password string `json:"password"`
		}

		if err := c.BindJSON(&request); err != nil {
			c.JSON(http.StatusBadRequest, gin.H{"error": "無効なリクエストです"})
			return
		}

		var storedPassword string
		err := DB.QueryRow("SELECT password FROM users WHERE username = ?", request.Username).Scan(&storedPassword)
		if err != nil {
			if err == sql.ErrNoRows {
				c.JSON(http.StatusUnauthorized, gin.H{"error": "ユーザー名またはパスワードが間違っています"})
			} else {
				c.JSON(http.StatusInternalServerError, gin.H{"error": "サーバー内部エラー"})
			}
			return
		}

		if request.Password != storedPassword {
			c.JSON(http.StatusUnauthorized, gin.H{"error": "ユーザー名またはパスワードが間違っています"})
			return
		}

		// セッションの開始
		session := sessions.Default(c)
		session.Set("username", request.Username)
		if err := session.Save(); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "セッションの保存に失敗しました"})
			return
		}

		c.JSON(http.StatusOK, gin.H{"message": "ログインしました！"})
	}
}
