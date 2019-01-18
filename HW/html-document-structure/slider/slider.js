'use strict';

const nav = document.querySelectorAll('.slider-nav > a'); // кнопки
const slides = document.querySelector('.slides'); // UL
const slide = document.querySelectorAll('.slide');//коллекция Li
const last = document.querySelector('[data-action="last"]');
const first = document.querySelector('[data-action="first"]');
const prev = document.querySelector('[data-action="prev"]');
const next = document.querySelector('[data-action="next"]');

document.addEventListener('DOMContentLoaded', firstStep)
first.addEventListener('click', firstStep);
last.addEventListener('click', lastStep);
next.addEventListener('click', nextStep);
prev.addEventListener('click', prevStep);

function firstStep(event) {
  Array.from(slide).forEach(el => el.classList.remove('slide-current'))
  slides.firstElementChild.classList.add('slide-current');
  inactivePrevFirst();
  activeNextLast();
};

function lastStep(event) {
  Array.from(slide).forEach(el => el.classList.remove('slide-current'));
  slides.lastElementChild.classList.add('slide-current');
  inactiveNextLast();
  activePrevFirst();
};

function nextStep(event) {
  const currentSlide = document.querySelector('.slide-current');
  const activSlide = currentSlide.nextElementSibling;
  activePrevFirst();

    if(activSlide) {
      currentSlide.classList.remove('slide-current');
      activSlide.classList.add('slide-current');
      if(activSlide.nextElementSibling) {
        next.classList.remove('disabled')
      } else {
        inactiveNextLast();
      }
    } else {
      inactiveNextLast();
    }
};

function prevStep(event) {
  const currentSlide = document.querySelector('.slide-current');
  const activSlide = currentSlide.previousElementSibling;
  activeNextLast();

  if(activSlide) {
    currentSlide.classList.remove('slide-current');
    activSlide.classList.add('slide-current');
    if(activSlide.previousElementSibling) {
      prev.classList.remove('disabled');
    } else {
      inactivePrevFirst();
    }
  } else {
    inactivePrevFirst();
  }
};


function inactivePrevFirst() {
  prev.classList.add('disabled');
  first.classList.add('disabled');
};

function inactiveNextLast() {
  next.classList.add('disabled');
  last.classList.add('disabled');
};

function activePrevFirst() {
  prev.classList.remove('disabled');
  first.classList.remove('disabled');
}

function activeNextLast() {
  next.classList.remove('disabled');
  last.classList.remove('disabled');
}


















//
