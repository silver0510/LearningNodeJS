const http = require('http');
const url = require('url');

function parseTime(time) {
	// body...
	return {
		hour: time.getHours(),
		min: time.getMinutes(),
		second: time.getSeconds()
	}
}

function unixTime(time) {
	// body...
	return{
		unixtime: time.getTime()
	}
}

var server = http.createServer(function(req,res) {
	var parseUrl = url.parse(req.url,true)
	var time = new Date(parseUrl.query.iso);
	//var path = parseUrl.path;
	var ret;


	if(req.url.indexOf('/api/parsetime') !== -1){
		ret = parseTime(time);
	}
	
	if(req.url.indexOf('/api/unixtime') !== -1){
		ret = unixTime(time);
	}
	res.writeHead(200,{'content-type': 'application/json'});
	res.end(JSON.stringify(ret));
})

server.listen('8080');