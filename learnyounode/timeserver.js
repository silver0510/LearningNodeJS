var net = require('net');

var server = net.createServer(function(socket) {
	var data = getTime();
	socket.write(data);
	socket.end();	
})

server.listen(8080);

function getTime() {
	// body...
	var date = new Date();
	var ret;

	ret = date.getFullYear() + '-';
	ret+= date.getMonth() + '-';
	ret+= date.getDate() + ' ';
	ret+= date.getHours() + ':';
	ret+= date.getMinutes();

	return ret;
}