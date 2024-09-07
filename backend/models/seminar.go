package models

type Seminar struct {
	SeminarID      int    `json:"seminar_id"`
	UnivID         int    `json:"univ_id"`
	SeminarName    string `json:"seminar_name"`
	ProfName       string `json:"prof_name"`
	StartDate      string `json:"start_date"`
	CategoryID     int    `json:"category_id"`
	Thumbnail      string `json:"thumbnail"` // string 型に変更
	OfferURL       string `json:"offer_url"`
	Content        string `json:"content"`
	UniversityName string `json:"university_name"`
}
