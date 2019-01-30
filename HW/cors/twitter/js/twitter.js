'use strict';

function addScript(src) {
  var elem = document.createElement("script");
  elem.setAttribute("type", "text/javascript");
  elem.src = src;
  document.head.appendChild(elem);
  return console.log(elem);
}
addScript('https://neto-api.herokuapp.com/twitter/jsonp');

function callback(data) {
	document.querySelector('[data-wallpaper]').src = data.wallpaper;
	document.querySelector('[data-username]').innerHTML = data.username;
	document.querySelector('[data-description]').innerHTML = data.description;
	document.querySelector('[data-pic]').src = data.pic;
	document.querySelector('[data-tweets]').innerHTML = data.tweets;
	document.querySelector('[data-followers]').innerHTML = data.followers;
	document.querySelector('[data-following]').innerHTML = data.following;
	
}

callback(addScript)
