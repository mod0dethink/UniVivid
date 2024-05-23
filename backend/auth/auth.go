package auth

import "github.com/gin-gonic/gin"

func RegisterRoutes(r *gin.Engine) {
    r.POST("/auth/login", func(c *gin.Context) {
        // ログイン処理
        c.JSON(200, gin.H{
            "message": "Logged in!",
        })
    })
}