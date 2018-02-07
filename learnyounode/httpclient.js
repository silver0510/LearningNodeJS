//Lấy tất cả dữ liệu từ đường link

var http = require('http');
var link = 'http://www.google.com/index.html';

http.get(link, function(response) {
	response.setEncoding('utf8');
	response.on('data',console.log);
	response.on('error',console.error);
}).on('error',console.error);