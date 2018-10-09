// Подключаем библиотеку для создания веб-сервера
const http = require ('http');
// для работы с файлами
const fs = require ('fs');
// Ip-адрес компьютера с сервером в сети
const hostname = '127.0.0.1';
// Порт сервера (идентификатор сервера на компьютере)
const port = 8080; 

// функция для обработки сообщений
// request - полуяенное сообщение
// response - ответное сообщение
function handle (request, response){
	response.statusCode = 200;
	var content;
	var stream;
	var data;
	var pos;
	
	
	if (request.url.includes("circle")){
		content = fs.readFileSync('circle.html', 'utf-8');	
		data = request.url;
		pos = data.search("[?]");
		data = data.substring(pos+1);
		var arr = data.split("&");
		arr[0] = Number(arr[0].replace("cx=", "")); 
		arr[1] = Number(arr[1].replace("cy=", "")); 
		arr[2] = Number(arr[2].replace("r=", "")); 
		arr[3] = arr[3].replace("color=%23", "#"); 
		content = content.replace ("$cx", arr[0]);
		content = content.replace ("$cy", arr[1]);
		content = content.replace ("$r", arr[2]);
		content = content.replace ("$fill", arr[3]);
		response.end(content);
	} 
	
	else {
		stream = fs.createReadStream('form.html');
		response.setHeader('Content-type', 'text/html');
		stream.pipe (response);
	}
}

const server = http.createServer (handle);

function init (){
	console.log ('Сервер запущен по адресу' + hostname + ':' + port);
	
}

server.listen(port, hostname, init);