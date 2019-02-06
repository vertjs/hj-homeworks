
const slide = document.querySelectorAll('.slide');
const nav = document.querySelector('.slider-nav');
const button = document.querySelectorAll('.slider-nav > a');

const slides = Array.from(slide);
const buttons = Array.from(button);
nav.addEventListener('click', flippingSlide);

function flippingSlide(event) {
  let activeSlide = document.querySelector('.slide-current');
  let buttonClicked = event.target.dataset.action;

  if (event.target.classList.contains('disabled')) {
    return;
  }
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
  }
  else if (buttonClicked === 'last') {
    activeSlide.classList.remove('slide-current');
    slides[slides.length - 1].classList.add('slide-current');
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
    disableButtons(buttons, true);
  } else if (!activeSlide.nextElementSibling) {
    disableButtons(buttons, false);
  } else {
    for (let button of buttons) {
      button.classList.remove('disabled');
    }
  }

};

function disableButtons(buttons, bool) {
  const ev = bool ? 0 : 1;
  buttons.forEach((button, i) => {
    if ((i + ev) % 2 === 0) {
      button.classList.add('disabled');
    }
    else {
      button.classList.remove('disabled');
    }
  })
};

activateSlide();
