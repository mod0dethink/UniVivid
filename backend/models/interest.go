package models

type InterestRequest struct {
	UserID      int   `json:"user_id"`
	CategoryIDs []int `json:"category_ids"`
}
