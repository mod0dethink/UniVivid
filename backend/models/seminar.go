package models

type Seminar struct {
	SeminarID   int    `json:"seminar_id"`
	UnivID      int    `json:"univ_id"`
	SeminarName string `json:"seminar_name"`
	ProfName    string `json:"prof_name"`
	StartDate   string `json:"start_date"`
	CategoryID  int    `json:"category_id"`
	Thumbnail   []byte `json:"thumbnail"`
	OfferURL    string `json:"offer_url"`
	Content     string `json:"content"`
}
