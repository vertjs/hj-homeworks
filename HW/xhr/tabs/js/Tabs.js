'use strict';

const tabs = document.getElementsByTagName('a');
const content = document.getElementById('content');
const active = document.querySelector('.active');
const preloader = document.getElementById('preloader');

Array.from(tabs).forEach(el => el.addEventListener('click', onclick))


function onclick(event) {
	event.preventDefault()
	Array.from(tabs).forEach(el => el.classList.remove('active'));
	event.target.classList.add('active');

	const xhr = new XMLHttpRequest();
	xhr.open("GET", event.target.href);
	preloader.classList.remove('hidden');
	console.log(`Асинхронный запрос запущен`);

		xhr.onload = function() {
			content.innerHTML = this.responseText;
			console.log(`Загрузка завершена, статус ${xhr.status} `)
		}

		xhr.onerror = function() {
		  console.log( 'Ошибка ' + this.status );
		}

		xhr.send();
		preloader.classList.add('hidden');
};
