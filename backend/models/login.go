package models

type LoginRequest struct {
	Type        string `json:"type"`
	MailAddress string `json:"mailaddress"`
	Password    string `json:"password"`
	UserName    string `json:"username"`
}
