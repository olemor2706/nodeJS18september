const Client = require('pg').Client;
const client = new Client();
const hostname = '127.0.0.1';
const port = 8080; 
const http = require ('http');
const fs = require ('fs');
const express = require ('express');

var app = express();

app.get ("id=", function(request, response) {
	response.setHeader('Content-type', 'text/html');
	response.statusCode = 200;
	var content = fs.readFileSync("pg1.html", "utf-8");
	var str = request.url;
	var pos = str.indexOf ("id="); 
	str = str.substr (pos+3);
	client.connect();
	client.query ("SELECT last_name, first_name, email, phone_number, hire_date, salary From employees where employee_id = " + 
	str, function (err, res) {
		if(!err){
			str = res.rows[0].last_name + " " + 
			res.rows[0].first_name + " " +
			res.rows[0].email + " " +
			res.rows[0].phone_number + " " +
			res.rows[0].hire_date + " " +
			res.rows[0].salary;
		} else {
			str = "Mistake!";
		}
		client.end();
		content = content.replace ("$href", str);
		response.end(content);
	});
});

app.get ("/emp", function(request, response) {
	response.setHeader('Content-type', 'text/html');
	response.statusCode = 200;
	var content = fs.readFileSync("pg.html", "utf-8");
	var str = "";
	client.connect();
	client.query ('SELECT employee_id, last_name, first_name, email, phone_number
		hire_date, salary From employees', function (err, res) {
		if(!err){
			str = "";
			for (var i = 0; i <= res.rows.length - 1; i++){
				str = str + "<a href = '/emp?id=" + employee_id + "'>" +
				+ res.rows[i].last_name + " " + res.rows[i].first_name + "</a> <br>";
			}
		} else {
			str = "Mistake!";
		}
		client.end();
		content = content.replace ("$href", str);
		response.end(content);
	});
});


app.listen(port, function(){
	console.log ('Сервер запущен по адресу' + hostname + ':' + port);
});

