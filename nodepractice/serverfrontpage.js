var http = require('http');
var fs = require('fs');
var frontPagehtml = fs.readFileSync('Frontpage.html','utf8',function(err,data){
		if (err) {
			throw err;
		}
		else {
			return data;
		}
		});
var styleFrontPagecss = fs.readFileSync('stylefrontpage.css','utf8',function(err,data){
	if (err){
		throw err;
	}
	else {
		return data;
	}
	});

var userhtml = fs.readFileSync('user.html','utf8',function(err,data){
		if (err) {
			throw err;
		}
		else {
			return data;
		}
			});
var server = http.createServer(function(req,res){
	
	// res.setHeader('Contenet-type','text/html');
	// res.setHeader('X-Foo','bar');
	
			if (req.url === '/'){
		res.writeHead(200,{'Contenet-type':'text/html'});
		res.end (frontPagehtml);}

		else if (req.url === '/stylefrontpage.css'){

		res.writeHead(200,{'Contenet-type':'text/css'});
		res.end (styleFrontPagecss);
		
	}
	else if (req.url === '/user'){
		res.writeHead(200,{'Contenet-type':'text/html'});
		res.end (userhtml);
	}

});
server.listen (3008);
console.log('server started at this port');