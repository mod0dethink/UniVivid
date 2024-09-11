package models

type NoteComment struct {
	NoteID  int    `json:"note_id"`
	UserID  int    `json:"user_id"`
	Comment string `json:"comment"`
	Approve int    `json:"approve"`
}
