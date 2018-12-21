'use strict';

const higher = [
'sounds/higher/fifth.mp3',
'sounds/higher/first.mp3',
'sounds/higher/fourth.mp3',
'sounds/higher/second.mp3',
'sounds/higher/third.mp3',
];


const middle = [
'sounds/middle/fifth.mp3',
'sounds/middle/first.mp3',
'sounds/middle/fourth.mp3',
'sounds/middle/second.mp3',
'sounds/middle/third.mp3'
]



const btns = document.getElementsByTagName('li');
for(var key of btns) {
	key.addEventListener('click', play);
}


function play(event) {
	document.addEventListener('keydown', up);
	function up(event) {		
		switch (event.key) {
			case 'Shift':
				for(var i = 0; i <  btns.length; i++) {
					btns[i].getElementsByTagName('audio')[0].src = higher[i];
				}
			break;

			default:
			for(var i = 0; i <  btns.length; i++) {
				btns[i].getElementsByTagName('audio')[0].src = middle[i];
			}
		}
	}
	var audio = this.getElementsByTagName('audio')[0];
	audio.currentTime = 0;
	audio.play();
	console.log(audio);
}