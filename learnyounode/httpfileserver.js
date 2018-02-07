var http = require('http');
var fs = require('fs');
var server = http.createServer(function(request,response) {
	response.writeHead(200,{'content-type': 'text/plain'})
	fs.createReadStream('textFile.html').pipe(response);
})

server.listen(8080);
