var fs = require('fs');

module.exports = function(router) {
	fs.readdir('./routes/', function(err, file) {
		file.forEach(function(v) {
			if (v.indexOf('.js') > 0) {
				require('./routes/' + v)(router);
			}
		});
	});
};