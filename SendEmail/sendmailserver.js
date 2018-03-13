//Dùng thư viện 'nodemailer' để gởi email
var nodemailer = require('nodemailer');

//vd gởi mail bằng gmail
//thiết lập tài khoản gởi
var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'điền email của mình vào đây',
		pass: 'điền mật khẩu vào đây'
	}
});

//nội dung email
var mailOptions = {
  from: 'điền email của mình vào đây',
  to: 'điền email mún gởi đến vào đây',
  subject: 'Chủ đề mail',
  text: 'Nội dung mail' 
  // ở đây có thế dùng nội dung html để gởi, 
  //vd: html: '<h1>Welcome</h1><p>That was easy!</p>'
}

//gởi email
transporter.sendMail(mailOptions, function(err, info) {
	if(err) throw err;
	console.log('Email sent: ' + info.response);
})