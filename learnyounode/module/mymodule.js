var fs = require('fs');
var path = require('path');

module.exports.filterByExtName =function (dir, extName, callback) {
	// body...
	fs.readdir(dir, function(err, list) {
		if(err) return callback(err);

		list = list.filter(function(file) {
			return path.extname(file) === ('.' + extName);
		})

		callback(null, list)
	})
} 