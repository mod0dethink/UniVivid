package models

type User struct {
	UserID      int    `json:"user_id"`
	MailAddress string `json:"mail_address"`
	UserName    string `json:"user_name"`
	Password    string `json:"password"`
}
