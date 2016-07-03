var http = require('http');
http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('Hello World');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

process.argv.forEach(function(val, index, array){
	console.log(index + ': ' + val);
});

var circle = require('./circle.js');
console.log('r4 : ' + circle.area(4));