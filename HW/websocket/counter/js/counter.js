'use strict';

const connection = new WebSocket('wss://neto-api.herokuapp.com/counter');
const counter = document.querySelector('.counter');
const errors = document.querySelector('.errors');

connection.addEventListener('open', (event) => console.log(`Connect open`))

connection.addEventListener('message', (event) =>{
	let data = JSON.parse(event.data)
	counter.innerHTML = data.connections
	errors.innerHTML = data.errors
})

connection.addEventListener('error', error => {console.log(`Произошла ошибка: ${error.data}`)});

window.addEventListener('beforeunload', () => {
	connection.onclose = function(event) {
  		connection.close(1000, 'Работа закончена')
	};
});
