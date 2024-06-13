package main

import (
	"univivid/backend/api"
	"univivid/backend/auth"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()
	api.RegisterRoutes(r)
	auth.RegisterRoutes()
	r.Run() // デフォルトポートは8080番
}
