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
	r.POST("/api/add-history", addHistory)
	r.POST("/api/upload-note", uploadNote)
	r.POST("/api/favorite-note", favoriteNote)
	r.POST("/api/favorite-semi", favoriteSemi)
	r.POST("/api/add-note-comment", addNoteComment)
	r.POST("/api/approve-note", approveNote)
	r.POST("/api/approve-note-comment", approveNoteComment)
	r.POST("/api/add-univ-comment", addUnivComment)
	r.POST("/api/approve-univ-comment", approveUnivComment)
	r.POST("/api/reject-note", rejectNote)
	r.POST("/api/reject-note-comment", rejectNoteComment)
	r.POST("/api/reject-univ-comment", rejectUnivComment)
	r.POST("/api/upload-video", uploadVideo)
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

	// StartDateを適切な形式に変換
	parsedStartDate, err := time.Parse(time.RFC3339, seminar.StartDate)
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "開始日の形式が不正です", "details": err.Error()})
		return
	}
	formattedStartDate := parsedStartDate.Format("2006-01-02 15:04:05")

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
	_, err = db.Exec(query, seminarID, seminar.SeminarName, seminar.ProfName, formattedStartDate, seminar.OfferURL, seminar.CategoryID, seminar.Content, thumbnailBytes)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "セミナーの詳細情報の作成に失敗しました", "details": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "セミナーが正常に作成されました"})
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

func addNoteComment(c *gin.Context) {
	session := sessions.Default(c)
	userID := session.Get("userid")

	if userID == nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "ログインが必要です"})
		return
	}

	var comment struct {
		NoteID  int    `json:"note_id"`
		Comment string `json:"comment"`
	}
	if err := c.ShouldBindJSON(&comment); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "JSONのバインドに失敗しました: " + err.Error()})
		return
	}

	// Note_IDがNoteテーブルに存在するか確認
	var noteExists bool
	query := `SELECT EXISTS(SELECT 1 FROM Note WHERE Note_ID = ?)`
	err := db.QueryRow(query, comment.NoteID).Scan(&noteExists)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "ノートの存在確認に失敗しました", "details": err.Error()})
		return
	}

	if !noteExists {
		c.JSON(http.StatusBadRequest, gin.H{"error": "指定されたノートが存在しません"})
		return
	}

	query = `INSERT INTO Note_comment (Note_ID, User_ID, Comment, approve) VALUES (?, ?, ?, 0)`
	_, err = db.Exec(query, comment.NoteID, userID, comment.Comment)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "コメントの追加に失敗しました", "details": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "コメントが正常に追加されました"})
}

func approveNote(c *gin.Context) {
	var request struct {
		NoteID int `json:"note_id"`
	}
	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "JSONのバインドに失敗しました: " + err.Error()})
		return
	}

	query := `UPDATE Note SET approve = 1 WHERE Note_ID = ?`
	result, err := db.Exec(query, request.NoteID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "ノートの承認に失敗しました", "details": err.Error()})
		return
	}

	rowsAffected, err := result.RowsAffected()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "影響を受けた行の取得に失敗しました", "details": err.Error()})
		return
	}

	if rowsAffected == 0 {
		c.JSON(http.StatusNotFound, gin.H{"error": "指定されたノートが見つかりません"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "ノートが正常に承認されました"})
}

func approveNoteComment(c *gin.Context) {
	var request struct {
		CommentID int `json:"comment_id"`
	}
	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "JSONのバインドに失敗しました: " + err.Error()})
		return
	}

	query := `UPDATE Note_comment SET approve = 1 WHERE Note_ID = ? AND User_ID = ?`
	result, err := db.Exec(query, request.CommentID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "コメントの承認に失敗しました", "details": err.Error()})
		return
	}

	rowsAffected, err := result.RowsAffected()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "影響を受けた行の取得に失敗しました", "details": err.Error()})
		return
	}

	if rowsAffected == 0 {
		c.JSON(http.StatusNotFound, gin.H{"error": "指定されたコメントが見つかりません"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "コメントが正常に承認されました"})
}

func addUnivComment(c *gin.Context) {
	session := sessions.Default(c)
	userID := session.Get("userid")

	if userID == nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "ログインが必要です"})
		return
	}

	var comment struct {
		UnivID int    `json:"univ_id"`
		Review string `json:"review"`
	}
	if err := c.ShouldBindJSON(&comment); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "JSONのバインドに失敗しました: " + err.Error()})
		return
	}

	// Univ_IDがUniversityテーブルに存在するか確認
	var univExists bool
	query := `SELECT EXISTS(SELECT 1 FROM University WHERE Univ_ID = ?)`
	err := db.QueryRow(query, comment.UnivID).Scan(&univExists)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "大学の存在確認に失敗しました", "details": err.Error()})
		return
	}

	if !univExists {
		c.JSON(http.StatusBadRequest, gin.H{"error": "指定された大学が存在しません"})
		return
	}

	query = `INSERT INTO Univ_comment (Univ_ID, User_ID, Review, approve) VALUES (?, ?, ?, 0)`
	_, err = db.Exec(query, comment.UnivID, userID, comment.Review)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "コメントの追加に失敗しました", "details": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "コメントが正常に追加されました"})
}

func approveUnivComment(c *gin.Context) {
	var request struct {
		CommentID int `json:"comment_id"`
	}
	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "JSONのバインドに失敗しました: " + err.Error()})
		return
	}

	query := `UPDATE Univ_comment SET approve = 1 WHERE comment_ID = ?`
	result, err := db.Exec(query, request.CommentID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "大学コメントの承認に失敗しました", "details": err.Error()})
		return
	}

	rowsAffected, err := result.RowsAffected()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "影響を受けた行の取得に失敗しました", "details": err.Error()})
		return
	}

	if rowsAffected == 0 {
		c.JSON(http.StatusNotFound, gin.H{"error": "指定された大学コメントが見つかりません"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "大学コメントが正常に承認されました"})
}

func rejectNote(c *gin.Context) {
	var request struct {
		NoteID int `json:"note_id"`
	}
	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "JSONのバインドに失敗しました: " + err.Error()})
		return
	}

	query := `UPDATE Note SET approve = 2 WHERE Note_ID = ?`
	result, err := db.Exec(query, request.NoteID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "ノートの拒否に失敗しました", "details": err.Error()})
		return
	}

	rowsAffected, err := result.RowsAffected()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "影響を受けた行の取得に失敗しました", "details": err.Error()})
		return
	}

	if rowsAffected == 0 {
		c.JSON(http.StatusNotFound, gin.H{"error": "指定されたノートが見つかりません"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "ノートが正常に拒否されました"})
}

func rejectNoteComment(c *gin.Context) {
	var request struct {
		CommentID int `json:"comment_id"`
	}
	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "JSONのバインドに失敗しました: " + err.Error()})
		return
	}

	query := `UPDATE Note_comment SET approve = 2 WHERE Note_ID = ? AND User_ID = ?`
	result, err := db.Exec(query, request.CommentID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "コメントの拒否に失敗しました", "details": err.Error()})
		return
	}

	rowsAffected, err := result.RowsAffected()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "影響を受けた行の取得に失敗しました", "details": err.Error()})
		return
	}

	if rowsAffected == 0 {
		c.JSON(http.StatusNotFound, gin.H{"error": "指定されたコメントが見つかりません"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "コメントが正常に拒否されました"})
}

func rejectUnivComment(c *gin.Context) {
	var request struct {
		CommentID int `json:"comment_id"`
	}
	if err := c.ShouldBindJSON(&request); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "JSONのバインドに失敗しました: " + err.Error()})
		return
	}

	query := `UPDATE Univ_comment SET approve = 2 WHERE comment_ID = ?`
	result, err := db.Exec(query, request.CommentID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "大学コメントの拒否に失敗しました", "details": err.Error()})
		return
	}

	rowsAffected, err := result.RowsAffected()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "影響を受けた行の取得に失敗しました", "details": err.Error()})
		return
	}

	if rowsAffected == 0 {
		c.JSON(http.StatusNotFound, gin.H{"error": "指定された大学コメントが見つかりません"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "大学コメントが正常に拒否されました"})
}

func uploadVideo(c *gin.Context) {
	session := sessions.Default(c)
	UnivID := session.Get("univid")

	if UnivID == nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "ログインが必要です"})
		return
	}

	var video struct {
		UnivID     int    `json:"univ_id"`
		CategoryID int    `json:"category_id"`
		URL        string `json:"url"`
		UploadTime string `json:"upload_time"`
	}
	if err := c.ShouldBindJSON(&video); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "JSONのバインドに失敗しました: " + err.Error()})
		return
	}

	// Seminar テーブルに挿入
	query := `INSERT INTO Seminar (Univ_ID, Category_ID) VALUES (?, ?)`
	result, err := db.Exec(query, video.UnivID, video.CategoryID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "セミナーの作成に失敗しました", "details": err.Error()})
		return
	}

	seminarID, err := result.LastInsertId()
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "セミナーIDの取得に失敗しました", "details": err.Error()})
		return
	}

	// Semi_videos テーブルに挿入
	query = `INSERT INTO Semi_videos (Seminar_ID, URL, Upload_time) VALUES (?, ?, ?)`
	_, err = db.Exec(query, seminarID, video.URL, video.UploadTime)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "動画のアップロードに失敗しました", "details": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "動画が正常にアップロードされました"})
}
