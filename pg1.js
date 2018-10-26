const Client = require('pg').Client;
const hostname = '127.0.0.1';
const port = 8080; 
const http = require ('http');
const fs = require ('fs');
const express = require ('express');

var app = express();

app.get ("/emp", function(request, response) {
	response.setHeader('Content-type', 'text/html');
	response.statusCode = 200;
	var content = fs.readFileSync("pg1.html", "utf-8");
	var str = request.query.id;
	const client = new Client();
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

app.get ("/add", function(request, response) {
	response.setHeader('Content-type', 'text/html');
	response.statusCode = 200;
	var content = fs.readFileSync("pg1.html", "utf-8");
	var str = '<form method = "get" action = "/insert">' + 
				'<input type="text" name = "first_name">first_name</input> <br>' +
				'<input type="text" name = "last_name">last_name</input> <br>' +
				'<input type="text" name = "email">email</input> <br>' +
				'<input type="text" name = "phone_number">phone_number</input> <br>' +
				'<input type="date" name = "hire_date">hire_date</input> <br>' +
				'<input type="number" name = "salary">salary</input> <br>' +
				'<input type="submit" value="Добавить">	</input>' +
				'<input type="reset" value="Отмена"></input>' +
				'</form>';
	
	content = content.replace ("$href", str);
	response.end(content);
});

app.get ("/insert", function(request, response) {
	response.statusCode = 200;
	var data = request.url;
	var arr = data.split("&");
	arr[0] = arr[0].replace("first_name=", ""); 
	arr[1] = arr[1].replace("last_name=", ""); 
	arr[2] = arr[2].replace("email=", ""); 
	arr[3] = arr[3].replace("phone_number=", ""); 
	arr[4] = arr[4].replace("hire_date=", ""); 
	arr[5] = arr[5].replace("salary=", ""); 
	
	var id = 1000;
	const client = new Client();
	client.connect();
	client.query ('Grant select on all tables in schema public to education', function (err, res){
		if(err){
			console.log("Mistake!");
		}
	});
	client.query ('Insert into employees (employee_id, last_name, first_name, email, phone_number, hire_date, salary) Values ('+
					id + ', "' + arr[0] + '", "' + arr[1] + '", "' + arr[2] +
					'", "' + arr[3] + '", "' + arr[4] + '", "' + arr[5]+ '")',	function (err, res) {});	
	client.end();
});

app.get ("/", function(request, response) {
	response.setHeader('Content-type', 'text/html');
	response.statusCode = 200;
	var content = fs.readFileSync("pg1.html", "utf-8");
	var str = "";
	const client = new Client();
	client.connect();
	client.query ('SELECT employee_id, last_name, first_name, email, phone_number, hire_date, salary From employees', function (err, res) {
		if(!err){
			str = "";
			for (var i = 0; i <= res.rows.length - 1; i++){
				str = str + "<a href = '/emp?id=" + res.rows[i].employee_id + "'>" +
				res.rows[i].last_name + " " + res.rows[i].first_name + "</a> <br>";
			}
			str = str + '<br><form method = "get" action = "/add">' + 
						'<input type="submit" value="Добавить">	</input>' +
						'</form>';
		} else {
			str = "Mistake!";
		}
		
		content = content.replace ("$href", str);
		response.end(content);
		client.end();
	});
});


app.listen(port, function(){
	console.log ('Сервер запущен по адресу' + hostname + ':' + port);
});

