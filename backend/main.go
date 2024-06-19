package main

import (
	"univivid/backend/api"
	"univivid/backend/auth"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	api.RegisterArticleRoutes(r)
	auth.RegisterRoutes(r)
	r.Run() // デフォルトポートは8080番
}
