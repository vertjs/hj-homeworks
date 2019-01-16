'use strict';

const nav = document.querySelectorAll('.slider-nav > a');
const slides = document.querySelector('.slides');
const last = slides.lastElementChild;
console.log(slides);
const slide = document.querySelectorAll('.slide');
console.log(slide);
document.addEventListener('DOMContentLoaded', showferst)

//Array.from(nav).forEach(el => el.addEventListener('click', clickButtuns));

function clickButtuns(event) {
  event.target
}


function showferst(event) {
  Array.from(slide).forEach(li => li.style.opacity = 0);

  last.previousElementSibling.style.opacity = 1;
  console.log(last.previousElementSibling);
}
