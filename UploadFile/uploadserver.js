//Dùng thư viện 'Formidable' để upload file
var formidable = require('formidable');
var http = require('http');
var fs = require('fs');
//Dùng thư viện 'mv' để di chuyển file
var mv = require('mv');

http.createServer(function(req,res) {
	//Xử lý khi có file upload
	if(req.url == '/fileupload'){
		var form = new formidable.IncomingForm();
		form.parse(req, function(err,fields,files) {
			//Khi file được up lên nó sẽ lưu vào 1 thư mục tạm thời
			//nên ta phải lưu file up lên vào thư mục do ta chỉ định
			var oldpath = files.filetoupload.path; //đây là file tạm thời
			//đây là đường dẫn mới
			var newpath = 'D:/Learning/Learning web/NodeJS/UploadFile/save/'+ files.filetoupload.name;
			mv(oldpath, newpath, {mkdirp: true}, function(err) {
				if (err) throw err;
				res.write('File uploaded and moved!')
				res.end();
			})			
		})
	}
	else{
		res.writeHead(200, {'Content-Type': 'text/html'});
	    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
	    res.write('<input type="file" name="filetoupload"><br>');
	    res.write('<input type="submit">');
	    res.write('</form>');
	    return res.end();
	}
}).listen(8080);
