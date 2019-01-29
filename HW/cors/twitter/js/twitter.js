'use strict';

const container = document.querySelector('.container');
const background = document.querySelector('.bg');
const username = document.dataset('data-username');
console.log("data-wallpaper", background);

function parseData(data) {
	background.src = data.wallpaper

}

console.log(parseData({"username":"@carlf","description":"Carl Fredricksen is the protagonist in Up. He also appeared in Dug's Special Mission as a minor character.","tweets":2934,"followers":1119,"following":530,"wallpaper":"https://neto-api.herokuapp.com/hj/4.1/twitter/up.jpg","pic":"https://neto-api.herokuapp.com/hj/4.1/twitter/carl.jpg"}))


function loadData(url) {
	return new Promise((done, fail) => {

});
}

