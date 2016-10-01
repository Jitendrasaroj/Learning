
var fs = require('fs');
var fileData;
//this syntex is of es6 dont use
//const gs=require('fs');
fs.readFile('hello.js', 'utf-8',function(err,data){
	if (err) {
	console.log(err);

	}
	else {
	console.log(data);
	fileData=data;
	fs.writeFile('new.js', fileData, 'utf8',function(err,data){
		if (err){
			console.log(err);
		}
		else {
			console.log(data);
		}
	})
}});
// fs.writeFile('new.js', fileData, 'utf8',function(err,data){
// 		if (err){
// 			console.log(err);
// 		}
// 		else {
// 			console.log(data);
// 		}
// 	});