'use strict';


const menu = document.getElementsByClassName('wrapper-dropdown')[0];
menu.onclick = hidd;

function hidd() {
	if(this.classList.contains('active')) {
		this.classList.remove('active')
	} else {
		this.classList.add('active')
	}
};