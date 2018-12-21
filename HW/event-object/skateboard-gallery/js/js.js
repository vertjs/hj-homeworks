'use strict';
const nav = document.getElementById('nav');
const imgs = nav.getElementsByTagName('a');
const view = document.getElementById('view');

for(var key of imgs) {
  key.addEventListener('click', appoint);
};

function appoint(event) {
  event.preventDefault();
  for(var i of imgs) {
    i.classList.remove('gallery-current');
  }
  event.currentTarget.classList.add('gallery-current');
  view.src = event.currentTarget.href;
};
