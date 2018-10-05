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
	response.setHeader('Content-type', 'text/html');
	data = fs.readFileSync('circle.html', 'utf-8');
	content = data;
	//content = content + '</body>' +	'</html>';
	response.end(content);
}

const server = http.createServer (handle);

function init (){
	console.log ('Сервер запущен по адресу' + hostname + ':' + port);
	
}

server.listen(port, hostname, init);