'use strict';

function getPriceFormatted(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
document.addEventListener('DOMContentLoaded', load);

function load(event) {
  const sumPrice = document.getElementById('cart-total-price');
  const sumCart = document.getElementById('cart-count');
  const btns = document.getElementsByClassName('add');
  const arr = Array.from(btns)
  for (let key of arr) {
    key.addEventListener('click', replenishment);
  }

  let price = 0;
  let n = 0;

  function replenishment(event) {
    n++;
    let num = this.getAttribute('data-price');
    price += Number(num);
    sumPrice.textContent = getPriceFormatted(price);
    sumCart.textContent = getPriceFormatted(n);
  }

};
