var http = require('http');

http.createServer(function (request,respone) {
	// Gui HTTP header cua request
	// HTTP Status: 200 : OK
 	// Content Type: text/plain

 	respone.writeHead(200,{'Content-Type': 'text/plain'});

 	//Gui phan than cua response bao gom "Hello world"
 	respone.end('Hello world');
}).listen(8081);

//In thong bao
console.log('Server dang chay tai http://127.0.0.1:8081/');
