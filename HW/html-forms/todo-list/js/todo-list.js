"use strict";

const tasks = document.getElementsByTagName('output')[0];
const inputs = document.getElementsByTagName('input');
tasks.value = 1;
Array.from(inputs).forEach(el => el.addEventListener("click", onclick));


function onclick(event) {
  if(!event.target.hasAttribute('checked')) {
    event.target.setAttribute('checked', '');
    console.log(event.target)
    tasks.value++;

  } else if(event.target.hasAttribute('checked') ) {
    event.target.removeAttribute('checked');
    console.log(event.target)
    tasks.value--;
  }
};
