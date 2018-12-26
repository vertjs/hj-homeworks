'use strict';

function getPriceFormatted(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}
document.addEventListener('DOMContentLoaded', load);

function load(event) {
  var sumPrice = document.getElementById('cart-total-price');
  var sumCart = document.getElementById('cart-count');
  var btns = document.getElementsByClassName('add');
  var arr = Array.from(btns)
  for (var key of arr) {
    key.addEventListener('click', replenishment);
  }

  var price = 0;
  var n = 0;

  function replenishment(event) {
    n++;
    var num = this.getAttribute('data-price');
    price += Number(num);
    sumPrice.textContent = price;
    sumCart.textContent = n;
  }

};