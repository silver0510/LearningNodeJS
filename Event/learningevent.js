//Dùng thư viện "events" để tạo event
var events = require('events');
//Tất cả các phương thức và thuộc tính của event
//đều là instance của đối tượng EventEmitter 
//nên ta tạo 1 đối tượng này
var eventEmitter = new events.EventEmitter();

//Tạo event handler => đây là hàm mà khi sự kiện xảy ra nó thực hiện
var eventHandler = function() {
	console.log('Có động đất xảy ra !');
};

//Chỉ định khi sự kiện gì xảy ra thì làm gì
//ở đây là khi sự kiện "dongdat" thì nhảy vào hàm eventHandler
eventEmitter.on('dongdat',eventHandler);

//Hàm phát sinh sự kiện, khi nào mún sự kiện xảy ra thì gọi hàm này
eventEmitter.emit('dongdat');