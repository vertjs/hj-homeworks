'use strict';

const btns = document.getElementsByTagName('li');

function show() {
	this.getElementsByTagName('audio')[0].pause();
	this.getElementsByTagName('audio')[0].currentTime = 0; 
	console.log(this.getElementsByTagName('audio')[0].play());
}

for(var b of btns) {
	b.onclick = show;
}