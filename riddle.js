// Подключаем библиотеку для создания веб-сервера
const http = require ('http');
// для работы с файлами
const fs = require ('fs');
// Ip-адрес компьютера с сервером в сети
const hostname = '127.0.0.1';
// Порт сервера (идентификатор сервера на компьютере)
const port = 8080; 

var unitNum = 0;

function handle (request, response){
	var content = "";
	var isError = false;
	var strError = "";
	var unitArray = new Array();
	unitArray[0] = function (){
		content = content.replace ("$manClass", "leftShore");
		content = content.replace ("$wolfClass", "leftShore");
		content = content.replace ("$goatClass", "leftShore");
		content = content.replace ("$cabbageClass", "leftShore");
	}
	unitArray[1] = function (){
		content = content.replace ("$manClass", "leftShore");
		content = content.replace ("$wolfClass", "leftShore");
		content = content.replace ("$goatClass", "leftShore");
		content = content.replace ("$cabbageClass", "rightShore");
	}
	unitArray[2] = function (){
		content = content.replace ("$manClass", "leftShore");
		content = content.replace ("$wolfClass", "leftShore");
		content = content.replace ("$goatClass", "rightShore");
		content = content.replace ("$cabbageClass", "leftShore");
	}
	unitArray[3] = function (){
		content = content.replace ("$manClass", "leftShore");
		content = content.replace ("$wolfClass", "rightShore");
		content = content.replace ("$goatClass", "leftShore");
		content = content.replace ("$cabbageClass", "leftShore");
	}
	unitArray[4] = function (){
		content = content.replace ("$manClass", "rightShore");
		content = content.replace ("$wolfClass", "leftShore");
		content = content.replace ("$goatClass", "leftShore");
		content = content.replace ("$cabbageClass", "leftShore");
		isError = true;
		strError = "Ошибка: волк, козел и капуста не могут находиться на одном берегу без мужика. Начните сначала";
	}
	unitArray[5] = function (){
		content = content.replace ("$manClass", "rightShore");
		content = content.replace ("$wolfClass", "rightShore");
		content = content.replace ("$goatClass", "leftShore");
		content = content.replace ("$cabbageClass", "leftShore");
		isError = true;
		strError = "Ошибка: козел и капуста не могут находиться на одном берегу без мужика. Начните сначала";
	}
	unitArray[6] = function (){
		content = content.replace ("$manClass", "leftShore");
		content = content.replace ("$wolfClass", "rightShore");
		content = content.replace ("$goatClass", "leftShore");
		content = content.replace ("$cabbageClass", "rightShore");
	}
	unitArray[7] = function (){
		content = content.replace ("$manClass", "leftShore");
		content = content.replace ("$wolfClass", "rightShore");
		content = content.replace ("$goatClass", "rightShore");
		content = content.replace ("$cabbageClass", "leftShore");
		isError = true;
		strError = "Ошибка: волк и козел не могут находиться на одном берегу без мужика. Начните сначала";
	}
	unitArray[8] = function (){
		content = content.replace ("$manClass", "rightShore");
		content = content.replace ("$wolfClass", "rightShore");
		content = content.replace ("$goatClass", "leftShore");
		content = content.replace ("$cabbageClass", "leftShore");
		isError = true;
		strError = "Ошибка: козел и капуста не могут находиться на одном берегу без мужика. Начните сначала";
	}
	unitArray[9] = function (){
		content = content.replace ("$manClass", "rightShore");
		content = content.replace ("$wolfClass", "leftShore");
		content = content.replace ("$goatClass", "rightShore");
		content = content.replace ("$cabbageClass", "leftShore");
	}
	unitArray[10] = function (){
		content = content.replace ("$manClass", "rightShore");
		content = content.replace ("$wolfClass", "leftShore");
		content = content.replace ("$goatClass", "leftShore");
		content = content.replace ("$cabbageClass", "rightShore");
		isError = true;
		strError = "Ошибка: волк и козел не могут находиться на одном берегу без мужика. Начните сначала";
	}
	unitArray[11] = function (){
		content = content.replace ("$manClass", "rightShore");
		content = content.replace ("$wolfClass", "rightShore");
		content = content.replace ("$goatClass", "rightShore");
		content = content.replace ("$cabbageClass", "leftShore");
	}
	unitArray[12] = function (){
		content = content.replace ("$manClass", "rightShore");
		content = content.replace ("$wolfClass", "rightShore");
		content = content.replace ("$goatClass", "leftShore");
		content = content.replace ("$cabbageClass", "rightShore");
	}
	unitArray[13] = function (){
		content = content.replace ("$manClass", "rightShore");
		content = content.replace ("$wolfClass", "leftShore");
		content = content.replace ("$goatClass", "rightShore");
		content = content.replace ("$cabbageClass", "rightShore");
	}
	unitArray[14] = function (){
		content = content.replace ("$manClass", "rightShore");
		content = content.replace ("$wolfClass", "rightShore");
		content = content.replace ("$goatClass", "rightShore");
		content = content.replace ("$cabbageClass", "rightShore");
		isError = true;
		strError = "Поздравляем! Вы добились успеха!";
	}
	
	response.statusCode = 200;
	
	while (true){
		content = fs.readFileSync("riddle.html", "utf-8");
		if (request.url.includes("man")){
			switch (unitNum){
				case 0:
					unitNum = 4; 	break;
				case 1:
					unitNum = 10;	break;
				case 2:
					unitNum = 9;	break;
				case 3:
					unitNum = 8;	break;
				case 6:
					unitNum = 12;	break;
				case 9:
					unitNum = 2;	break;
				case 11:
					unitNum = 7;	break;
				case 12:
					unitNum = 6;	break;
				case 13:
					unitNum = 5;	break;
			}
			break;
		} 
		if (request.url.includes("wolf")){
			switch (unitNum){
				case 0:
					unitNum = 8; 	break;
				case 1:
					unitNum = 12;	break;
				case 2:
					unitNum = 11;	break;
				case 3:
				case 6:
				case 9:
				case 13:
					strError = "Недопустимый ход! Нельзя переплывать реку без мужика!";
					break;
				case 11:
					unitNum = 2;	break;
				case 12:
					unitNum = 1;	break;
			}
			break;
		}
		if (request.url.includes("goat")){
			switch (unitNum){
				case 0:
					unitNum = 9; 	break;
				case 1:
					unitNum = 13;	break;
				case 2:
				case 12:
					strError = "Недопустимый ход! Нельзя переплывать реку без мужика!";
					break;
				case 3:
					unitNum = 11;	break;
				case 6:
					unitNum = 14;	break;
				case 9:
					unitNum = 0;	break;
				case 11:
					unitNum = 3;	break;
				case 13:
					unitNum = 1;	break;
			}
			break;
		} 
		if (request.url.includes("cabbage")){
			switch (unitNum){
				case 0:
					unitNum = 10; 	break;
				case 1:
				case 6:
				case 9:
				case 11:
					strError = "Недопустимый ход! Нельзя переплывать реку без мужика!";
					break;
				case 2:
					unitNum = 13;	break;
				case 3:
					unitNum = 12;	break;
				case 12:
					unitNum = 3;	break;
				case 13:
					unitNum = 2;	break;
			}
			break;
		} 
		break;
	}
	
	unitArray[unitNum]();
	if (isError){
		content = content.replace ("$msg", strError + " Code: " + unitNum);
		unitNum = 0;
	} else{
		content = content.replace ("$msg", unitNum + ": " + strError);
	}
	
	response.end(content);
	
}


const server = http.createServer (handle);

function init (){
	console.log ('Сервер запущен по адресу' + hostname + ':' + port);
	
}

server.listen(port, hostname, init);