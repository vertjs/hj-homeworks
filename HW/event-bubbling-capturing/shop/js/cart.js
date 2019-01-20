'use strict';

document.addEventListener('DOMContentLoaded', loaded);

function loaded(event) {
  const but = document.querySelectorAll('.add-to-cart');
  Array.from(but).forEach(el => {
    el.addEventListener('click', event => addToCart(el));
    el.title = el.getAttribute("data-title");
    el.price = el.getAttribute("data-price");
  })
};

showMore.addEventListener('click', event => {
  event.preventDefault();
  loaded(event)
});
