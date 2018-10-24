const Client = require('pg').Client;
const client = new Client();
const hostname = '127.0.0.1';
const port = 8080; 
const http = require ('http');
const fs = require ('fs');
const express = require ('express');

var app = express();
app.get ("/emp", function(request, response) {
	response.setHeader('Content-type', 'text/html');
	response.statusCode = 200;
	var content = fs.readFileSync("pg.html", "utf-8");;
	var str = "";
	
	if (request.url.includes("/emp")){
		client.connect();
		client.query ('SELECT last_name, salary From employees', function (err, res) {
			if(!err){
				str = "<table> <br>";
				for (var i = 0; i <= res.rows.length - 1; i++){
					str = str + "<tr> " + 
					"<td>" + res.rows[i].last_name + "</td>" +
					"<td>" + res.rows[i].salary + "</td>" + 
					"</tr>";
				}
				str = str + "</table> <br>";	
			}
			client.end();
			content = content.replace ("$table", str);
			response.end(content);
		});
	}
});


app.listen(port, function(){
	console.log ('Сервер запущен по адресу' + hostname + ':' + port);
});

