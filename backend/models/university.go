package models

type University struct {
	UnivID      int    `json:"univ_id"`
	MailAddress string `json:"mail_address"`
	Password    string `json:"password"`
	UnivName    string `json:"univ_name"`
	InfoName    string `json:"info_name"`
	UnivURL     string `json:"univ_url"`
	DonateURL   string `json:"donate_url"`
}
