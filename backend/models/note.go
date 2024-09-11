package models

import "time"

type Note struct {
	NoteID     int       `json:"note_id"`
	SeminarID  int       `json:"seminar_id"`
	UserID     int       `json:"user_id"`
	Note       []byte    `json:"note"`
	UploadTime time.Time `json:"upload_time"`
	Approve    bool      `json:"approve"`
}

type UploadNoteRequest struct {
	SeminarName string `json:"seminar_name"`
	ProfName    string `json:"prof_name"`
	Content     string `json:"content"`
	UploadTime  string `json:"upload_time"`
}
