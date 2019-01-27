'use strict';

let access, block;
const thumbs = document.getElementsByClassName('thumbs')[0];
let bigImage = document.getElementById('big-image');
let price = 0;
let counte = 0;
let item = document.getElementById('quick-cart');
Array.from(thumbs.children).forEach(el => el.addEventListener('click', doActiveImg));

function doActiveImg(event) { // выделение фоток
  event.preventDefault();
  Array.from(thumbs.children).forEach(el => el.classList.remove('active'))
  event.currentTarget.classList.add('active');
  bigImage.style.backgroundImage = `url("${event.currentTarget.href}")`;
  console.log(bigImage);
};

const xhr = new XMLHttpRequest(); // добавление цветов
xhr.open('GET', 'https://neto-api.herokuapp.com/cart/colors');
xhr.send();
xhr.addEventListener('load', onLoad);

function onLoad() {
  var result = JSON.parse(xhr.response)
  var item = document.querySelector('#colorSwatch')
  for(var i=0; i < result.length; i++) {
    addFormColors(result[i])
    const colorElements = item.querySelectorAll('input');
    for (const elem of colorElements) {
      elem.checked = elem.value === localStorage.getItem('color');
    };
  }
  function addFormColors(data) {
    lockVariable(data);
    var item2 = document.createElement('div')
    item2.dataset.value = data.type;
    item2.className ='swatch-element color';
    item2.classList.add(data.type)
    item2.classList.add(access)
    item.appendChild(item2);
    let colorForm =
     `<div class="tooltip">${data.title}</div>
      <input quickbeam="color" id="swatch-1-${data.type}" type="radio" name="color" value="${data.type}" ${block}>
      <label for="swatch-1-${data.type}" style="border-color: ${data.type};">
        <span style="background-color: ${data.type};"></span>
        <img class="crossed-out" src="https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886">
      </label>`
      item2.innerHTML=colorForm;
      item2.addEventListener('click', e => {
        e.stopPropagation();
        let inp = item2.querySelector('input')
        inp.setAttribute('checked', 'checked');
        localStorage.setItem('color', e.target.value);
      })
    }
};

const xhr2 = new XMLHttpRequest(); // добавление размеров
xhr2.open('GET', 'https://neto-api.herokuapp.com/cart/sizes');
xhr2.send();
xhr2.addEventListener('load', onLoadSizes);

function onLoadSizes(data) {
  var resultSizes = JSON.parse(xhr2.response)
  var item = document.querySelector('#sizeSwatch');

  for(var i=0; i < resultSizes.length; i++) {
    addFormSizes(resultSizes[i]);
    const sizeSnippets = item.querySelectorAll('input');
    for(let el of sizeSnippets) {
      el.checked=el.value === localStorage.getItem('size')
    }
  }

  function addFormSizes(data) {
    lockVariable(data);
    var item2 = document.createElement('div');
    item2.dataset.value = data.type;
    item2.className ='swatch-element plain';
    item2.classList.add(data.type);
    item2.classList.add(access);
    item.appendChild(item2);
    let sizeform =
    `<input id="swatch-0-${data.type}" type="radio" name="size" value="${data.type}" ${block}>
      <label for="swatch-0-${data.type}">
        ${data.title}
        <img class="crossed-out" src="https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886">
      </label>`;
    item2.innerHTML=sizeform;
    item2.addEventListener('click', e => {
      e.stopPropagation();
      let inp = item2.querySelector('input')
      inp.setAttribute('checked', 'checked');
      localStorage.setItem('size', e.target.value);
    })
  }
};

const btnAddToCart = document.getElementById('AddToCart'); // кнопка
let addToCartForm = document.getElementById('AddToCartForm');
btnAddToCart.addEventListener('click', addProdToCart);

function addProdToCart(event) {
  event.preventDefault();
  const formData = new FormData(addToCartForm);
  formData.append('productId', addToCartForm.dataset.productId);
  fetch('https://neto-api.herokuapp.com/cart', {
    body: formData,
    credentials: 'same-origin',
    method: 'POST'
  })
  .then((response) => {
    if (response.status >= 200 && response.status < 400) {
        return response.json();
    }
    throw new Error(response.statusText);
  })
  .then((formData) => buildQuick(formData))
  .catch(console.error);
};

  item.addEventListener('click', deleteProd) // удаление товара

  function deleteProd(event) {
    const formData = new FormData(addToCartForm);
    formData.append('productId', addToCartForm.dataset.productId);
    fetch('https://neto-api.herokuapp.com/cart/remove', {
      body: formData,
      credentials: 'same-origin',
      method: 'POST'
    })
    .then((response) => {
      if (response.status >= 200 && response.status < 400) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then((formData) => buildQuick(formData))
    .catch(console.error);
  };

function lockVariable(data) { // блокировка снипетов
  if(data.isAvailable) {
    access = 'available';
    block = '';
  } else {
    access = 'soldout';
    block = 'disabled';
  };
};

function buildQuick(data) { // содержимое корзины
  let dt = data[0];
  console.log(data);
  if(dt === undefined) {
    dt = {
      id:0,
      pic:'',
      title:'',
      price:0,
      quantity:0
    };
    }
  console.log(dt);
  price = dt.quantity * dt.price;

  let text =
  `<div class="quick-cart-product quick-cart-product-static" id="quick-cart-product-${dt.id}" style="opacity: 1;">
  <div class="quick-cart-product-wrap">
  <img src="${dt.pic}" title="${dt.title}">
  <span class="s1" style="background-color: #000; opacity: .5">$${price}</span>
  <span class="s2"></span>
  </div>
  <span class="count hide fadeUp" id="quick-cart-product-count-${dt.id}">${dt.quantity}</span>
  <span class="quick-cart-product-remove remove" data-id="${dt.id}"></span>
  </div>`;
  item.innerHTML = text;

  let quick = document.createElement('a');
  quick.id='quick-cart-pay';
  quick.setAttribute('quickbeam', 'cart-pay');
  quick.className='cart-ico';
  if(dt.quantity>0) {
    quick.classList.add('open')
  } else {
    quick.classList.remove('open')
  }
  let span =
  `<span>
  <strong class="quick-cart-text">Оформить заказ<br></strong>
  <span id="quick-cart-price">$${price}</span>
  </span>`;
  quick.innerHTML = span;
  item.appendChild(quick);
}
