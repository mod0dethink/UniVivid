package api

import (
	"log"
	"net/http"
	"time"
	"univivid/backend/models"

	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
)

func RegisterArticleGetRoutes(r *gin.Engine) {
	r.GET("/api/get-seminars", getSeminars)
	r.GET("/api/get-seminar/:id", getSeminarByID)
	r.GET("/api/get-history", getUserHistory)
	r.GET("/api/get-favorite-notes", getFavoriteNotes)
	r.GET("/api/get-favorite-seminars", getFavoriteSeminars)
	r.GET("/api/get-unapproved-comments", getUnapprovedComments)          // 未認証コメント取得API
	r.GET("/api/get-approved-comments", getApprovedComments)              // 認証済みコメント取得API
	r.GET("/api/get-unapproved-univ-comments", getUnapprovedUnivComments) // 未認証大学コメント取得API
	r.GET("/api/get-approved-univ-comments", getApprovedUnivComments)     // 認証済み大学コメント取得API
	r.GET("/api/get-seminar-videos/:id", getSeminarVideos)
	r.GET("/api/get-all-seminar-videos", getAllSeminarVideos)
}

func getSeminars(c *gin.Context) {
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

func getSeminarByID(c *gin.Context) {
	seminarID := c.Param("id")
	var seminar models.Seminar
	var universityName string

	query := `
        SELECT seminar_in_person.Seminar_ID, Seminar.Univ_ID, seminar_in_person.Semi_name, seminar_in_person.Prof_name, seminar_in_person.Start_Date, Seminar.Category_ID, seminar_in_person.thumbnail, seminar_in_person.offer_URL, seminar_in_person.content, University.Univ_Name
        FROM Seminar
        JOIN seminar_in_person ON Seminar.Seminar_ID = seminar_in_person.Seminar_ID
        JOIN University ON Seminar.Univ_ID = University.Univ_ID
        WHERE seminar_in_person.Seminar_ID = ?
    `
	err := db.QueryRow(query, seminarID).Scan(&seminar.SeminarID, &seminar.UnivID, &seminar.SeminarName, &seminar.ProfName, &seminar.StartDate, &seminar.CategoryID, &seminar.Thumbnail, &seminar.OfferURL, &seminar.Content, &universityName)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "セミナーの取得に失敗しました", "details": err.Error()})
		return
	}
	seminar.UniversityName = universityName

	c.JSON(http.StatusOK, gin.H{"seminar": seminar})
}

func getUserHistory(c *gin.Context) {
	session := sessions.Default(c)
	userID := session.Get("userid")

	if userID == nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "ログインが必要です"})
		return
	}

	// デバッグ用ログ
	log.Printf("UserID: %v", userID)

	rows, err := db.Query(`
        SELECT Seminar.Seminar_ID, seminar_in_person.Semi_name, seminar_in_person.Prof_name, seminar_in_person.Start_Date, seminar_in_person.thumbnail
        FROM History
        JOIN Seminar ON History.Seminar_ID = Seminar.Seminar_ID
        JOIN seminar_in_person ON Seminar.Seminar_ID = seminar_in_person.Seminar_ID
        WHERE History.User_ID = ?
    `, userID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "受講履歴の取得に失敗しました", "details": err.Error()})
		return
	}
	defer rows.Close()

	var history []models.Seminar
	for rows.Next() {
		var seminar models.Seminar
		if err := rows.Scan(&seminar.SeminarID, &seminar.SeminarName, &seminar.ProfName, &seminar.StartDate, &seminar.Thumbnail); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "受講履歴の取得に失敗しました", "details": err.Error()})
			return
		}
		history = append(history, seminar)
	}

	if err := rows.Err(); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "受講履歴の取得に失敗しました", "details": err.Error()})
		return
	}

	// デバッグ用ログ
	log.Printf("History: %v", history)

	c.JSON(http.StatusOK, gin.H{"history": history})
}

func getFavoriteNotes(c *gin.Context) {
	session := sessions.Default(c)
	userID := session.Get("userid")

	if userID == nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "ログインが必要です"})
		return
	}

	rows, err := db.Query(`
        SELECT Note.Note_ID, Note.Seminar_ID, Note.Note, Note.Upload_time
        FROM Fav_note
        JOIN Note ON Fav_note.Note_ID = Note.Note_ID
        WHERE Fav_note.User_ID = ?
    `, userID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "お気に入りノートの取得に失敗しました", "details": err.Error()})
		return
	}
	defer rows.Close()

	var favoriteNotes []models.Note
	for rows.Next() {
		var note models.Note
		var uploadTime string
		if err := rows.Scan(&note.NoteID, &note.SeminarID, &note.Note, &uploadTime); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "お気に入りノートの取得に失敗しました", "details": err.Error()})
			return
		}
		// Upload_timeをtime.Time型に変換
		note.UploadTime, err = time.Parse("2006-01-02 15:04:05", uploadTime)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "アップロード時間の変換に失敗しました", "details": err.Error()})
			return
		}
		favoriteNotes = append(favoriteNotes, note)
	}

	if err := rows.Err(); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "お気に入りノートの取得に失敗しました", "details": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"favorite_notes": favoriteNotes})
}

func getFavoriteSeminars(c *gin.Context) {
	session := sessions.Default(c)
	userID := session.Get("userid")

	if userID == nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "ログインが必要です"})
		return
	}

	rows, err := db.Query(`
        SELECT Seminar.Seminar_ID, seminar_in_person.Semi_name, seminar_in_person.Prof_name, seminar_in_person.Start_Date, seminar_in_person.thumbnail
        FROM Fav_semi
        JOIN Seminar ON Fav_semi.Seminar_ID = Seminar.Seminar_ID
        JOIN seminar_in_person ON Seminar.Seminar_ID = seminar_in_person.Seminar_ID
        WHERE Fav_semi.User_ID = ?
    `, userID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "お気に入りセミナーの取得に失敗しました", "details": err.Error()})
		return
	}
	defer rows.Close()

	var favoriteSeminars []models.Seminar
	for rows.Next() {
		var seminar models.Seminar
		if err := rows.Scan(&seminar.SeminarID, &seminar.SeminarName, &seminar.ProfName, &seminar.StartDate, &seminar.Thumbnail); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "お気に入りセミナーの取得に失敗しました", "details": err.Error()})
			return
		}
		favoriteSeminars = append(favoriteSeminars, seminar)
	}

	if err := rows.Err(); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "お気に入りセミナーの取得に失敗しました", "details": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"favorite_seminars": favoriteSeminars})
}

func getUnapprovedComments(c *gin.Context) {
	rows, err := db.Query(`
        SELECT Note_comment.Note_ID, Note_comment.User_ID, Note_comment.Comment, Note_comment.approve
        FROM Note_comment
        WHERE Note_comment.approve = 0
    `)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "未認証コメントの取得に失敗しました", "details": err.Error()})
		return
	}
	defer rows.Close()

	var comments []models.NoteComment
	for rows.Next() {
		var comment models.NoteComment
		if err := rows.Scan(&comment.NoteID, &comment.UserID, &comment.Comment, &comment.Approve); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "未認証コメントの取得に失敗しました", "details": err.Error()})
			return
		}
		comments = append(comments, comment)
	}

	if err := rows.Err(); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "未認証コメントの取得に失敗しました", "details": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"unapproved_comments": comments})
}

func getApprovedComments(c *gin.Context) {
	rows, err := db.Query(`
        SELECT Note_comment.Note_ID, Note_comment.User_ID, Note_comment.Comment, Note_comment.approve
        FROM Note_comment
        WHERE Note_comment.approve = 1
    `)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "認証済みコメントの取得に失敗しました", "details": err.Error()})
		return
	}
	defer rows.Close()

	var comments []models.NoteComment
	for rows.Next() {
		var comment models.NoteComment
		if err := rows.Scan(&comment.NoteID, &comment.UserID, &comment.Comment, &comment.Approve); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "認証済みコメントの取得に失敗しました", "details": err.Error()})
			return
		}
		comments = append(comments, comment)
	}

	if err := rows.Err(); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "認証済みコメントの取得に失敗しました", "details": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"approved_comments": comments})
}

func getUnapprovedUnivComments(c *gin.Context) {
	rows, err := db.Query(`
        SELECT Univ_comment.comment_ID, Univ_comment.Univ_ID, Univ_comment.User_ID, Univ_comment.Review, Univ_comment.approve
        FROM Univ_comment
        WHERE Univ_comment.approve = 0
    `)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "未認証大学コメントの取得に失敗しました", "details": err.Error()})
		return
	}
	defer rows.Close()

	var comments []models.UnivComment
	for rows.Next() {
		var comment models.UnivComment
		if err := rows.Scan(&comment.CommentID, &comment.UnivID, &comment.UserID, &comment.Review, &comment.Approve); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "未認証大学コメントの取得に失敗しました", "details": err.Error()})
			return
		}
		comments = append(comments, comment)
	}

	if err := rows.Err(); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "未認証大学コメントの取得に失敗しました", "details": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"unapproved_univ_comments": comments})
}

func getApprovedUnivComments(c *gin.Context) {
	rows, err := db.Query(`
        SELECT Univ_comment.comment_ID, Univ_comment.Univ_ID, Univ_comment.User_ID, Univ_comment.Review, Univ_comment.approve
        FROM Univ_comment
        WHERE Univ_comment.approve = 1
    `)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "認証済み大学コメントの取得に失敗しました", "details": err.Error()})
		return
	}
	defer rows.Close()

	var comments []models.UnivComment
	for rows.Next() {
		var comment models.UnivComment
		if err := rows.Scan(&comment.CommentID, &comment.UnivID, &comment.UserID, &comment.Review, &comment.Approve); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "認証済み大学コメントの取得に失敗しました", "details": err.Error()})
			return
		}
		comments = append(comments, comment)
	}

	if err := rows.Err(); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "認証済み大学コメントの取得に失敗しました", "details": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"approved_univ_comments": comments})
}

func getSeminarVideos(c *gin.Context) {
	seminarID := c.Param("id")

	rows, err := db.Query(`
        SELECT Seminar_ID, URL, Upload_time
        FROM Semi_videos
        WHERE Seminar_ID = ?
    `, seminarID)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "動画情報の取得に失敗しました", "details": err.Error()})
		return
	}
	defer rows.Close()

	var videos []models.SemiVideo
	for rows.Next() {
		var video models.SemiVideo
		if err := rows.Scan(&video.SeminarID, &video.URL, &video.UploadTime); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "動画情報の取得に失敗しました", "details": err.Error()})
			return
		}
		videos = append(videos, video)
	}

	if err := rows.Err(); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "動画情報の取得に失敗しました", "details": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"videos": videos})
}

func getAllSeminarVideos(c *gin.Context) {
	rows, err := db.Query(`
        SELECT Seminar_ID, URL, Upload_time
        FROM Semi_videos
    `)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "動画情報の取得に失敗しました", "details": err.Error()})
		return
	}
	defer rows.Close()

	var videos []models.SemiVideo
	for rows.Next() {
		var video models.SemiVideo
		if err := rows.Scan(&video.SeminarID, &video.URL, &video.UploadTime); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "動画情報の取得に失敗しました", "details": err.Error()})
			return
		}
		videos = append(videos, video)
	}

	if err := rows.Err(); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "動画情報の取得に失敗しました", "details": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"videos": videos})
}
