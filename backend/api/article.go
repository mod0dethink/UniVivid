package api

import (
	"net/http"
	"univivid/backend/auth"

	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
)

func RegisterArticleRoutes(r *gin.Engine) {
	r.POST("/api/seminar", createSeminar)
}

func createSeminar(c *gin.Context) {
	type Seminar struct {
		UnivID      int    `json:"univ_id" binding:"required"`
		SeminarName string `json:"seminar_name" binding:"required"`
		ProfName    string `json:"prof_name"`
		StartDate   string `json:"start_date" binding:"required"`
		CategoryID  int    `json:"category_id" binding:"required"`
		Thumbnail   []byte `json:"thumbnail"`
		OfferURL    string `json:"offer_url" binding:"required"`
		Content     string `json:"content" binding:"required"`
	}

	var seminar Seminar
	if err := c.ShouldBindJSON(&seminar); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "JSONのバインドに失敗しました: " + err.Error()})
		return
	}

	// authからデータベース接続を取得
	db := auth.DB

	query := `INSERT INTO SEMINAR (Univ_ID, Seminar_Name, Prof_name, Start_Date, Category_ID, thumbnail, offer_URL, content) 
	          VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
	_, err := db.Exec(query, seminar.UnivID, seminar.SeminarName, seminar.ProfName, seminar.StartDate, seminar.CategoryID, seminar.Thumbnail, seminar.OfferURL, seminar.Content)
	if err != nil {
		// エラーメッセージとログ（ログはあとで消すべき
		c.JSON(http.StatusInternalServerError, gin.H{"error": "セミナーの作成に失敗しました", "details": err.Error()})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "セミナーが正常に作成されました"})
}
