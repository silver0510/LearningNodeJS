//đọc dữ liệu từ 3 link, sau đó in ra kết quả theo thứ tự nhập vào
//lưu ý là dữ liệu trả về có thể sớm muộn tùy vào link
//nên phải chờ đủ dữ liệu rồi mới in ra, trong khi chờ thì lưu dữ liệu đã đc nhận
//có nhìu module hỗ trợ việc này như  [async](https://npmjs.com/async) hay [after](https://npmjs.com/after).
//nhưng trong khuôn khổ bài này thì tự viết :v

var http = require('http');
var bl = require('bl');

var urls = ['http://www.google.com/index.html','http://www.worldtimebuddy.com/index.html','http://freetuts.net/lenh-switch-case-trong-javascript-402.html'];
var ret = [];
var counter = 0;

urls.forEach(function(url) {
	
	http.get(url, function(response) {
		response.pipe(bl(function(err,data) {
			if (err) return console.error('LOI',err);
			data = data.toString();
			switch(url)
			{
				case urls[0]:{
					ret[0] = data;
					break;
				}
				case urls[1]:{
					ret[1] = data;
					break;
				}
				case urls[2]:{
					ret[2] = data;
					break;
				}
			}
			counter++;
			if(counter === 3) console.log(ret);
		}))
	})	
})
