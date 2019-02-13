 'use strict';

const pupil = document.querySelector('.big-book__pupil');
const eye = document.querySelector('.big-book__eye');

const centrEyeByX = (eye.getBoundingClientRect().left + eye.getBoundingClientRect().right) / 2 + pageXOffset; // центральное положение глаза с учетом прокрутки по X
const centrEyeByY = (eye.getBoundingClientRect().top + eye.getBoundingClientRect().bottom) / 2 + pageYOffset; // центральное положение глаза с учетом прокрутки по Y

document.addEventListener('mousemove', event => {
    let pupilX = 30 * (event.pageX - centrEyeByX) / centrEyeByX; // движение зрачка по X
    let pupilY = 30 * (event.pageY - centrEyeByY) / centrEyeByY; // движение зрачка по Y
    let sizeChanger = Math.max(Math.abs(pupilX), Math.abs(pupilY));
    let pupilSize = 3 - (sizeChanger / 15);

    pupil.style.setProperty('--pupil-x', `${pupilX}px`);
    pupil.style.setProperty('--pupil-y', `${pupilY}px`);
    pupil.style.setProperty('--pupil-size', pupilSize);

 });
