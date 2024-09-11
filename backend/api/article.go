package api

import (
	"database/sql"
	"encoding/base64"
	"io/ioutil"
	"log"
	"net/http"
	"time"
	"univivid/backend/auth"
	"univivid/backend/models"

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
	r.POST("/api/favorite-semi", favoriteSemi)
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
	session := sessions.Default(c)
	userID := session.Get("userid")

	if userID == nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "ログインが必要です"})
		return
	}

	var history struct {
		SeminarID int `json:"seminar_id"`
	}
	if err := c.ShouldBindJSON(&history); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "JSONのバインドに失敗しました: " + err.Error()})
		return
	}

	query := `INSERT INTO HISTORY (User_ID, Seminar_ID) VALUES (?, ?)`
	_, err := db.Exec(query, userID, history.SeminarID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "受講履歴の追加に失敗しました", "details": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "受講履歴が正常に追加されました"})
}

func uploadNote(c *gin.Context) {
	session := sessions.Default(c)
	userID := session.Get("userid")

	if userID == nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "ログインが必要です"})
		return
	}

	// multipart/form-data形式のデータを取得
	form, err := c.MultipartForm()
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "フォームデータの取得に失敗しました: " + err.Error()})
		return
	}

	// フォームデータから値を取得
	seminarName := form.Value["seminar_name"]
	profName := form.Value["prof_name"]
	content := form.Value["content"]
	uploadTime := form.Value["upload_time"]

	// 必須フィールドがすべて存在するか確認
	if len(seminarName) == 0 || len(profName) == 0 || len(content) == 0 || len(uploadTime) == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "すべてのフィールドを入力してください"})
		return
	}

	// デバッグログを追加
	log.Printf("seminar_name: %s, prof_name: %s, upload_time: %s", seminarName[0], profName[0], uploadTime[0])

	// seminar_in_personテーブルからSeminar_IDを取得
	var seminarID int
	query := `SELECT Seminar_ID FROM seminar_in_person WHERE Semi_name = ? AND Prof_name = ?`
	err = db.QueryRow(query, seminarName[0], profName[0]).Scan(&seminarID)
	if err != nil {
		if err == sql.ErrNoRows {
			c.JSON(http.StatusNotFound, gin.H{"error": "指定されたセミナーが見つかりません", "details": err.Error()})
		} else {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "セミナーIDの取得に失敗しました", "details": err.Error()})
		}
		return
	}

	// PDFファイルを取得
	files := form.File["pdf"]
	if len(files) == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "PDFファイルのアップロードに失敗しました: ファイルが見つかりません"})
		return
	}

	file := files[0]
	pdfData, err := file.Open()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "PDFファイルの読み込みに失敗しました: " + err.Error()})
		return
	}
	defer pdfData.Close()

	// ファイルデータをバイト配列に変換
	pdfBytes, err := ioutil.ReadAll(pdfData)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "PDFファイルデータの読み込みに失敗しました: " + err.Error()})
		return
	}

	// uploadTimeを適切な形式に変換
	parsedUploadTime, err := time.Parse(time.RFC3339, uploadTime[0])
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "アップロード時間の形式が不正です: " + err.Error()})
		return
	}
	formattedUploadTime := parsedUploadTime.Format("2006-01-02 15:04:05")

	// デバッグログを追加
	log.Printf("formattedUploadTime: %s", formattedUploadTime)

	// Noteテーブルにデータを挿入
	query = `INSERT INTO Note (User_ID, Seminar_ID, Note, Upload_time) VALUES (?, ?, ?, ?)`
	_, err = db.Exec(query, userID, seminarID, pdfBytes, formattedUploadTime)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "ノートの保存に失敗しました", "details": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "ノートが正常にアップロードされました"})
}

func favoriteNote(c *gin.Context) {
	session := sessions.Default(c)
	userID := session.Get("userid")

	if userID == nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "ログインが必要です"})
		return
	}

	var favorite struct {
		NoteID int `json:"note_id"`
	}
	if err := c.ShouldBindJSON(&favorite); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "JSONのバインドに失敗しました: " + err.Error()})
		return
	}

	// Note_IDがNoteテーブルに存在するか確認
	var noteExists bool
	query := `SELECT EXISTS(SELECT 1 FROM Note WHERE Note_ID = ?)`
	err := db.QueryRow(query, favorite.NoteID).Scan(&noteExists)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "ノートの存在確認に失敗しました", "details": err.Error()})
		return
	}

	if !noteExists {
		c.JSON(http.StatusBadRequest, gin.H{"error": "指定されたノートが存在しません"})
		return
	}

	query = `INSERT INTO Fav_note (User_ID, Note_ID) VALUES (?, ?)`
	_, err = db.Exec(query, userID, favorite.NoteID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "ノートのお気に入り登録に失敗しました", "details": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "ノートが正常にお気に入りに追加されました"})
}

func favoriteSemi(c *gin.Context) {
	session := sessions.Default(c)
	userID := session.Get("userid")

	if userID == nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "ログインが必要です"})
		return
	}

	var favorite struct {
		SeminarID int `json:"seminar_id"`
	}
	if err := c.ShouldBindJSON(&favorite); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "JSONのバインドに失敗しました: " + err.Error()})
		return
	}

	// Seminar_IDがSeminarテーブルに存在するか確認
	var seminarExists bool
	query := `SELECT EXISTS(SELECT 1 FROM Seminar WHERE Seminar_ID = ?)`
	err := db.QueryRow(query, favorite.SeminarID).Scan(&seminarExists)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "セミナーの存在確認に失敗しました", "details": err.Error()})
		return
	}

	if !seminarExists {
		c.JSON(http.StatusBadRequest, gin.H{"error": "指定されたセミナーが存在しません"})
		return
	}

	query = `INSERT INTO Fav_semi (User_ID, Seminar_ID) VALUES (?, ?)`
	_, err = db.Exec(query, userID, favorite.SeminarID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "セミナーのお気に入り登録に失敗しました", "details": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "セミナーが正常にお気に入りに追加されました"})
}
