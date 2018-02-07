//Lấy tất cả dữ liệu từ đường link
//thông qua module http và bl
var http = require('http');
var bl = require('bl');
var link = 'http://www.google.com/index.html';

http.get(link, function(response) {
	response.pipe(bl(function(err,data) {
		if(err) return console.log('LOI',err);

		data = data.toString();
		console.log(data.length);
		console.log(data);
	}))
})