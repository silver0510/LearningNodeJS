//Dùng thư viện mongodb
//để tạo db mongo thì phải tạo đối tượng MongoClient
var MongoClient = require('mongodb').MongoClient;
//sau đó chỉ định một URL kết nối với địa chỉ IP chính xác
//và tên của cơ sở dữ liệu bạn muốn tạo.
//ở đây tạo db tên mydb
var url = 'mongodb://localhost:27017/mydb';

MongoClient.connect(url, function(err,db) {
	if(err) throw err;
	console.log('Database created');
	db.close();
})