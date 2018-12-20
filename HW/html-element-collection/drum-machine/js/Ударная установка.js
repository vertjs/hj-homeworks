'use strict';

const btns = document.getElementsByTagName('li');
//const audio = btns.getElementsByTagName('audio')




function playing(au) {
	this.play()
}

for(var b of btns) {
	b.onclick = () => {
	b.getElementsByTagName('audio')[0].play();
	console.log(b.getElementsByTagName('audio')[0])
}
}