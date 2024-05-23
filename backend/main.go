package main

import (
    "github.com/gin-gonic/gin"
    "univivid/backend/api"
    "univivid/backend/auth"
)

func main() {
    r := gin.Default()
    api.RegisterRoutes(r)
    auth.RegisterRoutes(r)
    r.Run() // デフォルトポートは8080番
}
