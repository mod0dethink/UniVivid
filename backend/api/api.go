package api

import "github.com/gin-gonic/gin"

//ここに基本的なAPIを書いていく
func RegisterRoutes(r *gin.Engine) {
	r.GET("/api/hello", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "Hello from API!",
		})
	})
}
