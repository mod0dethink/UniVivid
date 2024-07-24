package api

import (
	"io/ioutil"
	"net/http"
	"univivid/backend/auth"
	"univivid/backend/models"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
)

var db = auth.DB

func RegisterArticleRoutes(r *gin.Engine) {
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
	var seminar models.Seminar
	if err := c.ShouldBindJSON(&seminar); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "JSONのバインドに失敗しました: " + err.Error()})
		return
	}

	query := `INSERT INTO SEMINAR (Univ_ID, Seminar_Name, Prof_name, Start_Date, Category_ID, thumbnail, offer_URL, content) 
	          VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
	_, err := db.Exec(query, seminar.UnivID, seminar.SeminarName, seminar.ProfName, seminar.StartDate, seminar.CategoryID, seminar.Thumbnail, seminar.OfferURL, seminar.Content)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "セミナーの作成に失敗しました", "details": err.Error()})
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
		SELECT SEMINAR.Seminar_ID, SEMINAR.Univ_ID, SEMINAR.Seminar_Name, SEMINAR.Prof_name, SEMINAR.Start_Date, SEMINAR.Category_ID, SEMINAR.thumbnail, SEMINAR.offer_URL, SEMINAR.content, UNIVERSITY.Univ_Name
		FROM SEMINAR
		JOIN UNIVERSITY ON SEMINAR.Univ_ID = UNIVERSITY.Univ_ID
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
