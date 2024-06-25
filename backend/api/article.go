package api

import (
	"net/http"
	"univivid/backend/auth"
	"univivid/backend/models"

	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
)

var db = auth.DB

func RegisterArticleRoutes(r *gin.Engine) {
	r.POST("/api/create-seminar", createSeminar)
	r.GET("/api/get-seminars", getSeminars) // 新しいルートを追加
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
	rows, err := db.Query(`
		SELECT Seminar_ID, Univ_ID, Seminar_Name, Prof_name, Start_Date, Category_ID, thumbnail, offer_URL, content 
		FROM SEMINAR
	`)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "サーバー内部エラー"})
		return
	}
	defer rows.Close()

	var seminars []models.Seminar

	for rows.Next() {
		var seminar models.Seminar
		if err := rows.Scan(&seminar.SeminarID, &seminar.UnivID, &seminar.SeminarName, &seminar.ProfName, &seminar.StartDate, &seminar.CategoryID, &seminar.Thumbnail, &seminar.OfferURL, &seminar.Content); err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": "サーバー内部エラー"})
			return
		}
		seminars = append(seminars, seminar)
	}

	if err := rows.Err(); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "サーバー内部エラー"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"seminars": seminars})
}
