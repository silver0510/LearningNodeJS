//đọc file theo kiểu đồng bộ
var fs = require('fs');

var data = fs.readFileSync('D:\\Learning\\Learning web\\NodeJS\\learnyounode\\textFile.txt');
console.log(data.toString());