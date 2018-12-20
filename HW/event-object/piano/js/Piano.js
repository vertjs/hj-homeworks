'use strict';

const higher = [
'sounds/higher/fifth.mp3',
'sounds/higher/first.mp3',
'sounds/higher/fourth.mp3',
'sounds/higher/second.mp3',
'sounds/higher/fhird.mp3',
];

const btns = document.getElementsByTagName('li')

for(var key of btns) {
	key.addEventListener('click', play)
}


function play(event) {
	const audio = event.currentTarget.getElementsByTagName('audio')[0];
	audio.src = higher[0];
	audio.play();
		
	console.log(audio)
}