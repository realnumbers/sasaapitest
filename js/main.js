testJsonp();
testGetJson();
testWeather();

function testJsonp(){
	console.log("GET JSONP");
	$.jsonp({
		url: "http://stationboard.opensasa.info/?ORT_NR=5324",
		callbackParameter: "callback",
		success: function (data) {
			console.log(data);
		},
		error: function (option, msg) {
			console.log(option, msg);
		}
	});
}

function testGetJson(){
	console.log("GET JSON");
	$.ajax({
		dataType: "json",
		url: "http://stationboard.opensasa.info/?ORT_NR=5324&callback=call",
		success: function (data) { console.log(data) },
		error: function (data) { console.log(data) }
	});
}

function call() {
	console.log("CALLBACK");
}

function testWeather(){
	console.log("GET WEATHER");
	$.jsonp({
		url: "http://api.openweathermap.org/data/2.5/forecast/daily?q=berlin&units=metric&cnt=1&APPID=683af5473c859d5de2d9a1d6fdd40d9b",
		timeout: 5000,
		callbackParameter: "callback",
		success: function (data) {
			console.log(data);
		},
		error: function (option, msg) {
			console.log(option, msg);
		}
	});
}
