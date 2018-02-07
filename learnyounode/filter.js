//lọc file từ đường dẫn theo định dạng
var fs = require('fs');
var path = require('path');

var DUONGDAN = 'D:\\Learning\\Learning web\\NodeJS\\learnyounode';

function filterFileByExtnameFromPath(pathDir,extName) {
	fs.readdir(pathDir,function(err,list) {
		if(err){
			console.log('LOI');
		}else{
			var filtered = list.filter(function(name) {
			return path.extname(name) === ('.' + extName);
		})
		console.log(filtered);
		}
	});	 
}
filterFileByExtnameFromPath(DUONGDAN,"txt");
