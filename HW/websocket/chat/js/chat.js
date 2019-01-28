'use strict';
const connection = new WebSocket('wss://neto-api.herokuapp.com/chat');
let chatStatus = document.querySelector('.chat-status');
let messageSubmit = document.querySelector('.message-submit');
let messageStatus = document.querySelector('.message-status');
//let messagesContent = document.querySelector('.messages-content');
let messageInput = document.querySelector('.message-input');

let message = document.getElementsByClassName('message')[1];
let messagePersonal = document.getElementsByClassName('message')[2];



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

messageSubmit.addEventListener('click', (event) => {
	event.preventDefault()
	let arr = Array.from(document.querySelector('.messages-content').children)
	if(arr.length > 2) {
		document.querySelector('.messages-content').children[0].remove()
	};
	let clone = messagePersonal.cloneNode(true)
	let timestamp = clone.querySelector('.timestamp')
	clone.querySelector('.message-text').innerHTML = messageInput.value
	timestamp.innerHTML = createData()
	connection.send(JSON.stringify(messageInput.value))
	messageInput.value = ''
	document.querySelector('.messages-content').appendChild(clone)
})

connection.addEventListener('message', (event) => {
	let clone = message.cloneNode(true)
	let timestamp = clone.querySelector('.timestamp')
	clone.querySelector('.message-text').innerHTML = event.data
	timestamp.innerHTML = createData()
	if(clone.innerHTML === '...') {
		document.getElementsByClassName('message')[0].innerHTML = 'Собеседник печатает сообщение';
	} else {
		document.getElementsByClassName('message')[0].innerHTML = ''
	}
	document.querySelector('.messages-content').appendChild(clone)
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
