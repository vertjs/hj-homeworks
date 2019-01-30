'use strict';

function loadData(url) {
	
	var elem = document.createElement("script");
	elem.setAttribute("type", "text/javascript");
	elem.src = url;
	document.body.appendChild(elem);
	}


loadData('https://neto-api.herokuapp.com/profile/me')
callback(loadData)

function callback(data) {

console.log(data);
}

fetch('https://neto-api.herokuapp.com/profile/me').then(function(response) {
	return console.log(responseText);
}).then(function(response) {
	var objectURL = URL.createObjectURL(response)
}