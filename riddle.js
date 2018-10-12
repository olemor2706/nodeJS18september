// Подключаем библиотеку для создания веб-сервера
const http = require ('http');
// для работы с файлами
const fs = require ('fs');
// Для удобной работы с запросами
const express = require ('express');
// для работы с cookie (данные в браузере)
const cookieParser = require ('cookie-parser');
// Ip-адрес компьютера с сервером в сети
const hostname = '127.0.0.1';
// Порт сервера (идентификатор сервера на компьютере)
const port = 8080; 

// подготовка веб-приложения на express
var app = express();
app.use(cookieParser());

var unitNum = 0;
var strError = "";
var content = "";
var isError = false;
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

var manArray     = [4,  10,  9,  8,  0,  0, 12,  0,  0,  2,  0,  7,  6,  5];
var wolfArray    = [8,  12, 11, -1,  0,  0, -1,  0,  0, -1,  0,  2,  1, -1]; 
var goatArray    = [9,  13, -1, 11,  0,  0, 14,  0,  0,  0,  0,  3,  0,  1]; 
var cabbageArray = [10, -1, 13, 12,  0,  0, -1,  0,  0, -1,  0, -1,  3,  2]; 


app.get("/", function(request, response) {
	isError = false;
	strError = "";
	response.statusCode = 200;
	content = fs.readFileSync("riddle.html", "utf-8");
	unitArray[unitNum]();
	if (isError){
		content = content.replace ("$msg", strError + " Code: " + unitNum);
		unitNum = 0;
	} else{
		content = content.replace ("$msg", unitNum + ": " + strError);
	}
	
	response.setHeader ("Set-Cookie",["unitNum=" + unitNum]);
	response.end(content);
});
	
app.get ("/man", function(request, response) {
	response.statusCode = 200;
	content = fs.readFileSync("riddle.html", "utf-8");
	unitNum = manArray [unitNum]; 
	unitArray[unitNum]();
	if (isError){
		content = content.replace ("$msg", strError + " Code: " + unitNum);
		unitNum = 0;
	} else{
		content = content.replace ("$msg", unitNum + ": " + strError);
	}
	
	response.setHeader ("Set-Cookie",["unitNum=" + unitNum]);
	response.end(content);
});

app.get ("/wolf", function(request, response) {
	response.statusCode = 200;
	content = fs.readFileSync("riddle.html", "utf-8");
	if (wolfArray [unitNum] == -1){
		strError = "Недопустимый ход! Нельзя переплывать реку без мужика!";
	} else {
		unitNum = manArray [unitNum]; 
	}
	unitArray[unitNum]();
	if (isError){
		content = content.replace ("$msg", strError + " Code: " + unitNum);
		unitNum = 0;
	} else{
		content = content.replace ("$msg", unitNum + ": " + strError);
	}
	
	response.setHeader ("Set-Cookie",["unitNum=" + unitNum]);
	response.end(content);
});

app.get ("/goat", function(request, response) {
	response.statusCode = 200;
	content = fs.readFileSync("riddle.html", "utf-8");
	if (goatArray [unitNum] == -1){
		strError = "Недопустимый ход! Нельзя переплывать реку без мужика!";
	} else {
		unitNum = manArray [unitNum]; 
	}
	unitArray[unitNum]();
	if (isError){
		content = content.replace ("$msg", strError + " Code: " + unitNum);
		unitNum = 0;
	} else{
		content = content.replace ("$msg", unitNum + ": " + strError);
	}
	
	response.setHeader ("Set-Cookie",["unitNum=" + unitNum]);
	response.end(content);
});

app.get ("/cabbage", function(request, response) {
	response.statusCode = 200;
	content = fs.readFileSync("riddle.html", "utf-8");
	if (cabbageArray [unitNum] == -1){
		strError = "Недопустимый ход! Нельзя переплывать реку без мужика!";
	} else {
		unitNum = manArray [unitNum]; 
	}
	unitArray[unitNum]();
	if (isError){
		content = content.replace ("$msg", strError + " Code: " + unitNum);
		unitNum = 0;
	} else{
		content = content.replace ("$msg", unitNum + ": " + strError);
	}
	
	response.setHeader ("Set-Cookie",["unitNum=" + unitNum]);
	response.end(content);
});

app.get ("/set", function (request, response){
	var key = "test";
	var value = "It works";
	response.cookie (key,value); 
	response.end("end set");
}) ;

app.get ("/check", function (request, response){
	console.log (request.cookies); // test: 'It  works'
	console.log (request.cookies["test"]) // It  works
	response.end(request.cookies.test);
}) ;

app.get ("/peasant.jpg", function (request, response){
	var options = {
		root: __dirname
	}
	console.log (__dirname);
	response.sendFile ("peasant.jpg", options); 
}) ;


app.listen(port, function(){
	console.log ('Сервер запущен по адресу' + hostname + ':' + port);
});