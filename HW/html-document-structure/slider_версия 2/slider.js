'use strict';
const slide = document.querySelectorAll('.slide');
const nav = document.querySelector('.slider-nav');
const button = document.querySelectorAll('.slider-nav > a');

const slides = Array.from(slide);
const buttons = Array.from(button);
nav.addEventListener('click', flippingSlide);

function flippingSlide(event) {
  let activeSlide = document.querySelector('.slide-current');
  let buttonClicked = event.target.dataset.action;

  /*if (event.target.classList.contains('disabled')) {
        activeSlide.classList.remove('slide-current');
    return;
  }*/
  if (buttonClicked === 'first') {
    activeSlide.classList.remove('slide-current');
    slides[0].classList.add('slide-current');
  }
  else if (buttonClicked === 'prev') {
activeSlide.classList.remove('slide-current');
    activeSlide.previousElementSibling.classList.add('slide-current');
  }
  else if (buttonClicked === 'next') {
    activeSlide.classList.remove('slide-current');
    activeSlide.nextElementSibling.classList.add('slide-current');
    console.log(activeSlide);
    console.log(activeSlide.nextElementSibling);
    console.log(activeSlide.nextElementSibling.nextElementSibling);
    event.target.classList.toggle('disabled', !activeSlide.nextElementSibling.nextElementSibling);
  }
  else if (buttonClicked === 'last') {
    activeSlide.classList.remove('slide-current');
    slides[slides.length - 1].classList.add('slide-current');
    event.target.classList.add('disabled');
    buttons[1].classList.add('disabled');
  }
  activateSlide();
};

function activateSlide() {

  let activeSlide = document.querySelector('.slide-current');
  if (!activeSlide) {
    slides[0].classList.add('slide-current');
    activeSlide = slides[0];
 }
  if (!activeSlide.previousElementSibling) {
    buttons[0].classList.toggle('disabled');
    buttons[2].classList.toggle('disabled');
  //  buttons[1].classList.remove('disabled');
  //  buttons[3].classList.remove('disabled');
  } else if (!activeSlide.nextElementSibling) {
  //  buttons[1].classList.toggle('disabled');
//    buttons[3].classList.toggle('disabled', !activeSlide);
    buttons[0].classList.remove('disabled');
    buttons[2].classList.remove('disabled');
  } else {
    for (let button of buttons) {
      button.classList.remove('disabled');
    }
  }
};
activateSlide();
