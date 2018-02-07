var mymodule = require('./mymodule.js');

var dir = 'D:\\Learning\\Learning web\\NodeJS\\learnyounode';
var extName = "txt";

mymodule.filterByExtName(dir,extName,function(err,list) {
	if(err) return console.log('LOI:',err);

	list.forEach(function(file) {
		console.log(file);
	})
})