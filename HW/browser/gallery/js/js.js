'use strict';

var currentPhoto = document.getElementById('currentPhoto');
var nextbtn = document.getElementById('nextPhoto');
var prevbtn = document.getElementById('prevPhoto');

const arr = [
	"i/breuer-building.jpg",
	"i/guggenheim-museum.jpg",
	"i/headquarters.jpg",
	"i/IAC.jpg",
	"i/new-museum.jpg"
];
currentPhoto.src = "i/breuer-building.jpg";
var i = 1;
function slider() {
	currentPhoto.src = arr[i++];
	if(i==arr.length) {
		i=0;
		arr[i];
	}

	console.log(currentPhoto)
};

for(const key of ['nextPhoto', 'prevPhoto']) {
	const btn = document.getElementById(key);
	btn.onclick = slider;

};