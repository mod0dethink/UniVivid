package models

import "time"

type Note struct {
	NoteID     int       `json:"note_id"`
	SeminarID  int       `json:"seminar_id"`
	Note       []byte    `json:"note"`
	UploadTime time.Time `json:"upload_time"`
	Approve    bool      `json:"approve"`
}
