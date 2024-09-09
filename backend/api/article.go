package api

import (
	"io/ioutil"
	"log"
	"net/http"
	"univivid/backend/auth"
	"univivid/backend/models"

	"encoding/base64" // ここを修正

	"github.com/gin-contrib/cors"
	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/cookie"
	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
)

var db = auth.DB

func RegisterArticleRoutes(r *gin.Engine) {
	// セッションストアを設定
	store := cookie.NewStore([]byte("secret"))
	r.Use(sessions.Sessions("mysession", store))

	// CORSミドルウェアを追加
	config := cors.DefaultConfig()
	config.AllowOrigins = []string{"http://localhost:3000"} // フロントエンドのURLを指定
	config.AllowCredentials = true                          // クレデンシャルを許可
	config.AllowHeaders = []string{"Origin", "Content-Type", "Accept", "Authorization"}
	r.Use(cors.New(config))

	r.POST("/api/create-seminar", createSeminar)
	r.GET("/api/get-seminars", getSeminars)
	r.POST("/api/add-history", addHistory)
	r.POST("/api/upload-note", uploadNote)
	r.POST("/api/favorite-note", favoriteNote)
}
func createSeminar(c *gin.Context) {
	session := sessions.Default(c)
	univID := session.Get("univid")

	if univID == nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "ログインが必要です"})
		return
	}

	var seminar models.Seminar
	if err := c.ShouldBindJSON(&seminar); err != nil {
		log.Printf("JSONバインドエラー: %v", err)

		body, _ := ioutil.ReadAll(c.Request.Body)
		log.Printf("受信したリクエストボディ: %s", string(body))

		c.JSON(http.StatusBadRequest, gin.H{
			"error":    "JSONのバインドに失敗しました",
			"details":  err.Error(),
			"received": string(body),
		})
		return
	}

	// UnivIDをクッキーから取得した値に設定
	seminar.UnivID = univID.(int)

	// Thumbnail を base64 から []byte に変換
	thumbnailBytes, err := base64.StdEncoding.DecodeString(seminar.Thumbnail)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "サムネイルのデコードに失敗しました", "details": err.Error()})
		return
	}

	// StartDateのフォーマットを確認
	if seminar.StartDate == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "開始日が指定されていません"})
		return
	}

	// Seminar テーブルに挿入
	query := `INSERT INTO Seminar (Univ_ID, Category_ID) VALUES (?, ?)`
	result, err := db.Exec(query, seminar.UnivID, seminar.CategoryID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "セミナーの作成に失敗しました", "details": err.Error()})
		return
	}

	seminarID, err := result.LastInsertId()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "セミナーIDの取得に失敗しました", "details": err.Error()})
		return
	}

	// seminar_in_person テーブルに挿入
	query = `INSERT INTO seminar_in_person (Seminar_ID, Semi_name, Prof_name, Start_Date, offer_URL, Category_ID, thema_color, Location, content, thumbnail) 
             VALUES (?, ?, ?, ?, ?, ?, '#FFFFFF', 'LOC', ?, ?)`
	_, err = db.Exec(query, seminarID, seminar.SeminarName, seminar.ProfName, seminar.StartDate, seminar.OfferURL, seminar.CategoryID, seminar.Content, thumbnailBytes)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "セミナーの詳細情報の作成に失敗しました", "details": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "セミナーが正常に作成されました"})
}

func getSeminars(c *gin.Context) {
	if db == nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "データベース接続が初期化されていません"})
		return
	}

	rows, err := db.Query(`
        SELECT seminar_in_person.Seminar_ID, Seminar.Univ_ID, seminar_in_person.Semi_name, seminar_in_person.Prof_name, seminar_in_person.Start_Date, Seminar.Category_ID, seminar_in_person.thumbnail, seminar_in_person.offer_URL, seminar_in_person.content, University.Univ_Name
        FROM Seminar
        JOIN seminar_in_person ON Seminar.Seminar_ID = seminar_in_person.Seminar_ID
        JOIN University ON Seminar.Univ_ID = University.Univ_ID
    `)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "サーバー内部エラー"})
		return
	}
	defer rows.Close()

	var seminars []models.Seminar

	for rows.Next() {
		var seminar models.Seminar
		var universityName string
		if err := rows.Scan(&seminar.SeminarID, &seminar.UnivID, &seminar.SeminarName, &seminar.ProfName, &seminar.StartDate, &seminar.CategoryID, &seminar.Thumbnail, &seminar.OfferURL, &seminar.Content, &universityName); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "サーバー内部エラー"})
			return
		}
		seminar.UniversityName = universityName
		seminars = append(seminars, seminar)
	}

	if err := rows.Err(); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "サーバー内部エラー"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"seminars": seminars})
}

func addHistory(c *gin.Context) {
	var history struct {
		UserID    int `json:"user_id"`
		SeminarID int `json:"seminar_id"`
	}
	if err := c.ShouldBindJSON(&history); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "JSONのバインドに失敗しました: " + err.Error()})
		return
	}

	query := `INSERT INTO HISTORY (User_ID, Seminar_ID) VALUES (?, ?)`
	_, err := db.Exec(query, history.UserID, history.SeminarID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "受講履歴の追加に失敗しました", "details": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "受講履歴が正常に追加されました"})
}

func uploadNote(c *gin.Context) {
	var note models.Note
	if err := c.ShouldBind(&note); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "データのバインドに失敗しました: " + err.Error()})
		return
	}

	file, err := c.FormFile("note")
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "ファイルのアップロードに失敗しました: " + err.Error()})
		return
	}

	// ファイルを読み込む
	noteData, err := file.Open()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "ファイルの読み込みに失敗しました: " + err.Error()})
		return
	}
	defer noteData.Close()

	// ファイルデータをバイト配列に変換
	noteBytes, err := ioutil.ReadAll(noteData)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "ファイルデータの読み込みに失敗しました: " + err.Error()})
		return
	}

	query := `INSERT INTO Note (Seminar_ID, Note, Upload_time) VALUES (?, ?, NOW())`
	_, err = db.Exec(query, note.SeminarID, noteBytes)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "ノートの保存に失敗しました", "details": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "ノートが正常にアップロードされました"})
}

func favoriteNote(c *gin.Context) {
	var favorite struct {
		UserID int `json:"user_id"`
		NoteID int `json:"note_id"`
	}
	if err := c.ShouldBindJSON(&favorite); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "JSONのバインドに失敗しました: " + err.Error()})
		return
	}

	query := `INSERT INTO FAVE_NOTE (User_ID, Note_ID) VALUES (?, ?)`
	_, err := db.Exec(query, favorite.UserID, favorite.NoteID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "ノートのお気に入り登録に失敗しました", "details": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "ノートが正常にお気に入りに追加されました"})
}
