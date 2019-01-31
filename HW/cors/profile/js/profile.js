'use strict';


function addScript(src) {
  var elem = document.createElement("script");
  elem.setAttribute("type", "text/javascript");
  elem.src = src;
  document.head.appendChild(elem);
}
addScript('https://neto-api.herokuapp.com/profile/me');

function callback(data) {
	document.querySelector('[data-name]').innerHTML = data.name;
	document.querySelector('[data-description]').innerHTML = data.description;
	document.querySelector('[data-pic]').src = data.pic;
	document.querySelector('[data-position]').innerHTML = data.position;
	document.querySelector('.content').style.display = 'initial';

	return console.log(`https://neto-api.herokuapp.com/profile/${data.id}/technologies`);
}


function foo(data) {
	console.log(data);
/*	document.querySelector('[data-following]').innerHTML = data[0];

	document.querySelector('[data-technologies]').innerHTML = data.technologies;
	var span = document.createElement("span");
	span.className ='devicons'
	span.classList.add('devicons-django')*/
}
foo(callback())
