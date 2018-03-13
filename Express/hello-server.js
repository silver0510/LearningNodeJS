var express = require('express');
var app = express()
app.get('',function(req,res) {
	res.end('Hello World!')
});

app.get('/sinki',function(req,res) {
	res.end('Hello Sinki!')
});

app.listen(3000);
