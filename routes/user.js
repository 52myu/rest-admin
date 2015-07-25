'use strict';

module.exports = function(router) {

	router.get('/user', function(req, res) {
		res.send('ok');
	});
};