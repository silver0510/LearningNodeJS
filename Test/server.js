var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  //mún truy cập vào file nào trong thư mục hiện tại 
  //thì phải thêm "./" giống như cách thêm module tự tạo. 
  //Do trong phần pathname đã có dấu "/" rồi 
  //nên ở đây thêm dấu "."
  var filename = "." + q.pathname; 
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }  
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data + q.pathname);
    return res.end();
  });
}).listen(8080);