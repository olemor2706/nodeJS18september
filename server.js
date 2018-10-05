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
	//console.log("message received");
	//console.log(request);
	// состояние  http
	response.statusCode = 200;
	var content;
	var stream;
	var data;
	// Установка заголовка ответа 
	//text/plain - обычный текст, который браузер не обрабатывает
	//text/html - браузер обрабатывает как html
	response.setHeader('Content-type', 'text/html');
	// Формируем текст ответа
	var content;
	if (request.url.includes("main.css")){
		// Создаем по ток информации с источником в файле
		stream = fs.createReadStream('main.css');
		response.setHeader('Content-type', 'text/css');
		// Направляем поток в качестве ответа на запрос
		stream.pipe (response);
	} else if (request.url.includes('cake.jpg')){
			response.setHeader('Content-type', 'image/jpeg');
			stream = fs.createReadStream('cake.jpg');
			stream.pipe (response);	
		}
	else {
		while (true){
			data = fs.readFileSync("template.html", "utf-8");
			content = data;
			if (request.url.includes("file2")){
				content = content.replace ("$content", "<a href = 'file3.html'> file3</a>" +
					"<a href = 'file4.html'> file4</a>");
				break;
			} 
			if (request.url.includes("file3")){
				content = content.replace ("$content", "<a href = 'file4.html'> file4</a>");
				break;
			} 
			if (request.url.includes("file4")){
				content = content.replace ("$content", "<a href = 'file1.html'> file1</a>");
				break;
			} 
			content = content.replace ("$content"," ") + "<a href = 'file2.html'> file2</a> " +
				"<a href = 'file3.html'> file3</a> " +
				"<a href = 'file4.html'> file4</a>";
			break;
		}
	
	content = content + '<img src = "cake.jpg">';
	content = content + '</body>' +
		'</html>';
	// Отправляем ответ клиенту
	response.end(content);
	}
}

const server = http.createServer (handle);

function init (){
	console.log ('Сервер запущен по адресу' + hostname + ':' + port);
	
}

// Запуск сервера

server.listen(port, hostname, init);