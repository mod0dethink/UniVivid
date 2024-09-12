package models

type SemiVideo struct {
	SeminarID  int    `json:"seminar_id"`
	URL        string `json:"url"`
	UploadTime string `json:"upload_time"`
}
