package models

type UnivComment struct {
	CommentID int    `json:"comment_id"`
	UnivID    int    `json:"univ_id"`
	UserID    int    `json:"user_id"`
	Review    string `json:"review"`
	Approve   int    `json:"approve"`
}
