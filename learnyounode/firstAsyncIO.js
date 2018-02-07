//đọc file theo kiểu k đồng bộ
var fs = require('fs');

fs.readFile('textFile.txt',function(err,data) {
	if(err) {
		console.log('Loi');
	}else{
		console.log(data.toString());
	}
});