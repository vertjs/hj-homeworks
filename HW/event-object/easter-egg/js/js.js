'use strict';

document.addEventListener('keydown', keys);
const arr = [];
const check = [89, 84, 78, 74, 75, 74, 85, 66, 90];
var eRegExp = new RegExp(check);

function keys(event) {
  arr.push(event.keyCode);

  if(eRegExp.test(arr)) {
    document.getElementsByClassName('secret')[0].classList.add('visible');
  }

  if( event.ctrlKey && event.altKey && event.keyCode == 84 ) {
    document.getElementsByTagName('nav')[0].classList.toggle('visible');
  } 
};
