const http = require('http');
const map = require('through2-map');

const server = http.createServer(function(req,res) {
	if(req.method !== 'POST')
		return res.end('send me a POST\n');

	req.pipe(map(function (chunk) {
		// body...
		console.log(chunk.toString().toUpcase());
		return chunk.toString().toUpcase();
	})).pipe(res);
})

server.listen(8080);