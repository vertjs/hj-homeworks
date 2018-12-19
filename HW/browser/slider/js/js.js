'use strict';


var slider = document.getElementById('slider');

const arr = [
	"i/airmax-jump.png",
	"i/airmax-on-foot.png",
	"i/airmax-playground.png",
	"i/airmax-top-view.png",
	"i/airmax.png"
];

slider.src = "i/airmax-jump.png";
var i = 1;
function show() {
	slider.src = arr[i++];
	if(i == arr.length) {
		i = 0;
		arr[i];
	}
}
	
setInterval( show, 5000);