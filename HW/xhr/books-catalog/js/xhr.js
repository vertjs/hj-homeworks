"use strict";

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://neto-api.herokuapp.com/book/');
xhr.addEventListener("load", onLoad);
xhr.send();

const content = document.getElementById('content');

function onLoad(event) {

	const data = JSON.parse(xhr.responseText);
	
	for(var i=0; i < data.length; i++) {
		var li = document.createElement('li');
		content.appendChild(li);
		
		li.dataset.title = data[i].title;
		li.dataset.author = data[i].author.name;
		li.dataset.info = data[i].info;
		li.dataset.price = data[i].price;

		var img = document.createElement('img');
		li.appendChild(img);
		img.src=data[i].cover.small;
	}

	console.log(`Загрузка завершена, статус ${xhr.status} `);
	
	xhr.onerror = function() {
	  console.log( 'Ошибка ' + this.status );
	}
};