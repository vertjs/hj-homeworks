'use strict';
const connection = new WebSocket('wss://neto-api.herokuapp.com/chat');
let chatStatus = document.querySelector('.chat-status');
let messageSubmit = document.querySelector('.message-submit');
let messageStatus = document.querySelector('.message-status');
let messagesContent = document.querySelector('.messages-content');
let messageInput = document.querySelector('.message-input');

let message = document.getElementsByClassName('message')[1];
let messagePersonal = document.getElementsByClassName('message')[2];

let timestamp = document.querySelectorAll('.timestamp')

const messages = document.getElementsByClassName('message');
let createData = function () {
	let Data = new Date();
	let Hour = Data.getHours();
	let Minutes = Data.getMinutes();
	let time = `${Hour}:${Minutes}`;
	return time;
}

connection.addEventListener('open', () => {
	chatStatus.innerHTML = chatStatus.dataset.online;
	messageSubmit.removeAttribute('disabled')
	messageStatus.innerHTML = 'Пользователь появился в сети';
})

connection.addEventListener('message', (event) => {
	message.querySelector('.message-text').innerHTML = event.data
	timestamp[0].innerHTML = createData()
	if(message.innerHTML === '...') {
		document.getElementsByClassName('message')[0].innerHTML = 'Собеседник печатает сообщение';
	} else {
		document.getElementsByClassName('message')[0].innerHTML = ''
	}
})

messageSubmit.addEventListener('click', (event) => {
	event.preventDefault()
	messagePersonal.querySelector('.message-text').innerHTML = messageInput.value
	timestamp[1].innerHTML = createData()
	connection.send(JSON.stringify(messageInput.value))
	messageInput.value = ''
})

connection.onclose = () => {
	chatStatus.innerHTML = chatStatus.dataset.offline;
	console.log(`Connect close`)
	messageSubmit.setAttribute('disabled', 'disabled')
	messageStatus.innerHTML = 'Пользователь не в сети';
}

connection.addEventListener('error', error => {
	chatStatus.innerHTML = chatStatus.dataset.offline;
	console.log(`Произошла ошибка: ${error.data}`);
	messageSubmit.setAttribute('disabled', 'disabled')
	messageStatus.innerHTML = 'Пользователь не в сети';
});

function addtomessagesContent(o, p,m) {
	document.querySelector('.messages-content').appendChild(o)
	document.querySelector('.messages-content').appendChild(p)
	document.querySelector('.messages-content').appendChild(m)
	return document.querySelector('.messages-content');
}

console.log(addtomessagesContent(messageStatus, message, messagePersonal))
