'use strict';

const arr = [
'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA%20Chill%20Tour.mp3',
'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/This%20is%20it%20band.mp3',
'https://netology-code.github.io/hj-homeworks/html-element-collection/audioplayer/mp3/LA%20Fusion%20Jam.mp3'
];

const nams = [
'mp3/LA Chill Tour.mp3',
'mp3/This is it band.mp3',
'mp3/LA Fusion Jam.mp3'
]


var arr2 = [];

for(var key of nams) {
	var a1 = key.replace(/mp3\//, "");
	var a2 = a1.replace(/\.[a-z0-9]{1,5}$/, "");
	arr2.push(a2)
}

const playstate = document.getElementsByClassName('playstate')[0];
const audio = document.getElementsByTagName('audio')[0];
const mediaplayer = document.getElementsByClassName('mediaplayer')[0];
const back = document.getElementsByClassName('back')[0];
const next = document.getElementsByClassName('next')[0];
const title = document.getElementsByClassName('title')[0];
const stop = document.getElementsByClassName('stop')[0];

playstate.onclick = function () {
	 if (audio.paused) {
	 	audio.play();
	 } else {
	 	audio.pause();
	 }
	audio.paused ? mediaplayer.classList.remove('play') : mediaplayer.classList.add('play');
};

var i = 0;
var n = 0;
back.onclick = function () {
	if(!audio.paused) {
		if(i == 0 || n == 0) {
			i = arr.length;
			n = arr2.length;
		}
		i--;
		audio.src = arr[i];

		n--;
		title.title = arr2[n];


		audio.play();
		mediaplayer.classList.add('play');
	} else {
		if(n == 0) {
			n = arr2.length;
		}
		n--;
		title.title = arr2[n];
		audio.pause();
		mediaplayer.classList.remove('play');
	}
};

var k = 0;
var z = 0;
next.onclick = function() {
	if(audio.paused) {
		if(z == arr.length-1) {
			z = -1;
		}
		z++;
		title.title = arr2[z];
		audio.pause();
		mediaplayer.classList.remove('play');		
	} else {
		if(k == arr.length-1) {
			k = -1;
			z = -1;
		}
		k++;
		audio.src = arr[k];
		audio.play();
		mediaplayer.classList.add('play');
		z++;
		title.title = arr2[z];
		}
};

stop.onclick = function() {
	if(!audio.paused) {
		audio.pause();
		audio.currentTime = 0;
		mediaplayer.classList.remove('play');
	}
};