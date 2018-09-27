// Подключаем библиотеку для создания веб-сервера
const http = require ('http');
// Ip-адрес компьютера с сервером в сети
const hostname = '127.0.0.1';
// Порт сервера (идентификатор сервера на компьютере)
const port = 8080; 

// функция для обработки сообщений
// request - полуяенное сообщение
// response - ответсное сообщение
function handle (request, response){
	console.log("message received");
	console.log(request);
	// состояние  http
	response.statusCode = 200;
	// Установка заголовка ответа 
	//text/plain - обычный текст, который браузер не обрабатывает
	//text/html - браузер обрабатывает как html
	response.setHeader('Content-type', 'text/plain');
	// Формируем текст ответа
	var content = '<!DOCTYPE html>' +
		'<html>' +
		'<head>' +
		'<meta charset="utf-8"/>' +
		'</head>' +
		'<body>';
	if (request.url.includes("file2")){
		// содержимое файла 2 response.end("task1");
	} else if (request.url.includes("file2")){
	//
	}else {
		// содержимое файла 1
		content = content + "<a href = 'file2.html'> file2</a>";
		
	
	// Отправляем ответ клиенту
	}
	content = content + '</body>' +
		'</html>';
	response.end(content);
}

const server = http.createServer (handle);

function init (){
	console.log ('Сервер запущен по адресу' + hostname + ':' + port);
	
}

// Запуск сервера

server.listen(port, hostname, init);