var request = new XMLHttpRequest();

request.addEventListener("readystatechange", onReadyStateChange);
request.addEventListener("load", onLoad);

request.open('GET', 'https://neto-api.herokuapp.com/weather');
request.send();

console.log(`Асинхронный запрос запущен`);

function onReadyStateChange() {

	if (request.readyState !== 4) {
		return;
	} else {
		const response = JSON.parse(request.responseText);
		setData(response);
	}

}; 

function onLoad() {
	console.log(`Загрузка завершена, статус ${request.status} `)
}
	
	