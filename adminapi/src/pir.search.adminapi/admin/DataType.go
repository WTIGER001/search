package admin

import "encoding/json"

type DataType struct {
	ID string `json:"ID"`
}

func parseDataType(value string) (DataType, error) {
	d := DataType{ID: "1234241234"}
	return d, nil
}

func marshallDataType(d DataType) ([]byte, error) {
	result, err := json.Marshal(d)
	return result, err
}
