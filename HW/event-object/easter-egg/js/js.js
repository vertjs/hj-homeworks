'use strict';

const menu = document.getElementsByTagName('nav')[0];
document.addEventListener('keydown', keys);
const arr = [];
const check = [89, 84, 78, 74, 75, 74, 85, 66, 90];

function keys(event) {
  arr.push(event.keyCode);
  console.log(arr);
  if(arr === [89, 84, 78, 74, 75, 74, 85, 66, 90]) {
    console.log('нетология');
    const secret = document.getElementsByClassName('secret')[0];
    secret.classList.add('visible');
  }

  if( event.ctrlKey && event.altKey && event.keyCode == 84 ) {
    menu.classList.toggle('visible');
  } else  {
    event.preventDefault();
    return;
  }


};
