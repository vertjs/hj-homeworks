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
];
const lower = [
'sounds/lower/fifth.mp3',
'sounds/lower/first.mp3',
'sounds/lower/fourth.mp3',
'sounds/lower/second.mp3',
'sounds/lower/third.mp3'
];

const intface = document.getElementsByClassName('set')[0];
const btns = document.getElementsByTagName('li');
for(var key of btns) {
	key.addEventListener('click', play);
};

function play(event) {
	if (event.altKey){
		for(var i = 0; i <  higher.length; i++) {
				btns[i].getElementsByTagName('audio')[0].src = higher[i];
			}
				this.getElementsByTagName('audio')[0].currentTime = 0;
				this.getElementsByTagName('audio')[0].play();
				intface.classList.remove('middle');
				intface.classList.remove('lower');
				intface.classList.add('higher');
} else if(event.shiftKey) {
	for(var i = 0; i <  lower.length; i++) {
			btns[i].getElementsByTagName('audio')[0].src = lower[i];
		}
			this.getElementsByTagName('audio')[0].currentTime = 0;
			this.getElementsByTagName('audio')[0].play();
			intface.classList.remove('middle');
			intface.classList.remove('higher');
			intface.classList.add('lower');
	} else {
		for(var i = 0; i <  middle.length; i++) {
			btns[i].getElementsByTagName('audio')[0].src = middle[i];
		}
		this.getElementsByTagName('audio')[0].currentTime = 0;
		this.getElementsByTagName('audio')[0].play();
		intface.classList.remove('lower');
		intface.classList.remove('higher');
		intface.classList.add('middle');
	}
}
