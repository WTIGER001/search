package admin

import (
	"time"

	"log"

	"github.com/samuel/go-zookeeper/zk"
)

type Data struct {
	DataTypes  map[string]DataType
	DataFields map[string]DataField
}

type DataField struct {
}

type DB struct {
	conn               *zk.Conn
	ZookeeperAddresses []string
	Root               string
}

func (db *DB) Bootstrap() {
	db.Root = "Search"
	db.ZookeeperAddresses = []string{"127.0.0.1"}
}

func (db *DB) Connect() {

	// Connect to zookeeper
	c, _, err := zk.Connect(db.ZookeeperAddresses, time.Second) //*10)
	must(err, "Connecting to Zookeeper")

	db.conn = c
}

func (db *DB) LoadData() (Data, error) {
	d := Data{}
	datatyps, err := loadDataTypes(db.conn, db.Root)
	if should(err, "Loading Datatypes") {
		d.DataTypes = datatyps
	} else {
		return d, err
	}

	return d, nil
}

func loadDataTypes(conn *zk.Conn, root string) (map[string]DataType, error) {
	path := root + "/configuration/datatypes"
	items, _, err := conn.Children(path)
	must(err, "Loading Datatypes from Zookeeper")

	types := make(map[string]DataType)
	for _, value := range items {
		// Parse the value into a datatypes structure
		t, err := parseDataType(value)
		if should(err, "Parse Datatype") {
			types[t.ID] = t
		}
	}
}

func must(err error, msg string) {
	if err != nil {
		log.Fatal(msg)
		panic(err)
	}
}

func should(err error, msg string) bool {
	if err != nil {
		log.Print(msg)
		return false
	}
	return true
}

func (db *DB) DeleteDataType(ID string, version int32) error {
	path := db.Root + "/DataTypes/" + ID
	err := db.conn.Delete(path, version)
	return err
}

func (db *DB) AddDataType(d DataType) error {
	path := db.Root + "/DataTypes/" + d.ID
	data, err := marshallDataType(d)
	must(err, "Marshal DataType")
	flags := int32(0)
	acl := zk.WorldACL(zk.PermAll)
	_, err = db.conn.Create(path, data, flags, acl)
	return err
}
