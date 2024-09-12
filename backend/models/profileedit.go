package models

type ProfileEditRequest struct {
	Type         string `json:"type"`
	MailAddress  string `json:"mailaddress"`
	Username     string `json:"username,omitempty"`
	UnivName     string `json:"univname,omitempty"`
	InfoName     string `json:"infoname,omitempty"`
	UnivURL      string `json:"univurl,omitempty"`
	DonateURL    string `json:"donateurl,omitempty"`
	Password     string `json:"password,omitempty"`
	ProfileImage string `json:"profile_image,omitempty"` // 画像データを追加
}
