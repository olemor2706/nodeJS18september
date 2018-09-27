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
	// состояние  http
	response.statusCode = 200;
	// Установка заголовка ответа
	response.setHeader('Content-type', 'text/plain');
	// Отправляем ответ клиенту
	response.end('It works!');
}

const server = http.createServer (handle);

function init (){
	console.log ('Сервер запущен по адресу' + hostname + ':' + port);
	
}

// Запуск сервера

server.listen(port, hostname, init);