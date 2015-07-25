var restify = require('restify');
var config = require('config');
var mongoose = require('mongoose');
// var log = require('./lib/log');

var route = require('./route.js');

var server = restify.createServer({
	name: 'epb-rest',
	version: '1.0.0'
});

server.use(restify.queryParser());
server.use(restify.bodyParser());

//=====

(function(conf) {
	var url = 'mongodb://' + conf.host + '/' + conf.database;
	mongoose.connect(url);
	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function callback() {
		console.log('db connection :' + url);
	});
})(config.get('mongo'));

// log.config(config.get('tracerConfig'));
//=====

route(server);

server.listen(config.get('server.port'), function() {
	console.log('%s listening at %s', server.name, server.url);
});