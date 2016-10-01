var fs = require('fs');
var readline = require('readline');

var rl = readline.createInterface ({
	input : fs.createReadStream ('Crimes_-_2001_to_present.csv')
	});

	var fd=fs.openSync('demo.csv','a');
			rl.on('line,',function(line){
				fs.write(fd,line);
			});
rl.on('close',function(){
	console.log('completed');

});