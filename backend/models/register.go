package models

type RegisterRequest struct {
	Type        string `json:"type"`
	Username    string `json:"username"`
	MailAddress string `json:"mailaddress"`
	Password    string `json:"password"`
	UnivName    string `json:"univname,omitempty"`
	InfoName    string `json:"infoname,omitempty"`
	UnivURL     string `json:"univurl,omitempty"`
	DonateURL   string `json:"donateurl,omitempty"`
}
