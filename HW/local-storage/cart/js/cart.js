'use strict';

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://neto-api.herokuapp.com/cart/colors');
xhr.send();
xhr.addEventListener('load', onLoad);

function onLoad() {
  var result = JSON.parse(xhr.response)
  var item = document.querySelector('#colorSwatch')
  for(var i=0; i < result.length; i++) {
    addForm(result[i])
  }
  function addForm(data) {
    var item2 = document.createElement('div')
    item2.dataset.value = data.type;
    item2.className ='swatch-element color';
    item2.classList.add(data.type)
    if(data.isAvailable){
      item2.classList.add('available')
    } else{
      item2.classList.add('soldout')
    }
    item.appendChild(item2)
    var item3 = document.createElement('div')
    item3.className ='tooltip'
    item3.innerHTML = data.title;
    item2.appendChild(item3)
    var item4 = document.createElement('input')
    item4.setAttribute('quickbeam','color')
    item4.id=`swatch-1-${data.type}`;
    item4.setAttribute('type','radio')
    item4.setAttribute('name','color')
    item4.setAttribute('value', data.type)
    item2.appendChild(item4)
    if(data.isAvailable){
      item4.removeAttribute('disabled')
    } else{
      item4.setAttribute('disabled', 'disabled')
    }
    var item5 = document.createElement('label')
    item5.setAttribute('for', item4.id)
    item5.setAttribute('style',`border-color: ${data.type}`)
    item2.appendChild(item5)
    var span = document.createElement('span')
    span.setAttribute('style',`background-color: ${data.type}`)
    item5.appendChild(span)
    if(data.isAvailable){
      var img = document.createElement('img')
      img.className ='crossed-out'
      img.setAttribute('src', document.getElementsByClassName('thumb-image')[i].href)
      item5.appendChild(img)
    } else return;
    item4.addEventListener('click', e => {
      e.target.setAttribute('checked', 'checked');
    })
    }
}

const xhr2 = new XMLHttpRequest();
xhr2.open('GET', 'https://neto-api.herokuapp.com/cart/sizes');
xhr2.send();
xhr2.addEventListener('load', onLoadSizes);

function onLoadSizes(data) {
  var resultSizes = JSON.parse(xhr2.response)
  var item = document.querySelector('#sizeSwatch');
  for(var i=0; i < resultSizes.length; i++) {
    addFormSizes(resultSizes[i])
  }

  function addFormSizes(data) {
    var item2 = document.createElement('div');
    item2.dataset.value = data.type;
    item2.className ='swatch-element plain';
    item2.classList.add(data.type);
    if(data.isAvailable) {
      item2.classList.add('available')
    } else {
      item2.classList.add('soldout')
    }
    item.appendChild(item2);
    var input = document.createElement('input');
    input.id=`swatch-0-${data.type}`;
    input.setAttribute('type', 'radio');
    input.setAttribute('name', 'size');
    input.setAttribute('value', data.type);
    if(data.isAvailable) {
      input.removeAttribute('disabled')
    } else {
      input.setAttribute('disabled', 'disabled')
    }
    item2.appendChild(input);
    var label = document.createElement('label');
    label.setAttribute('for', input.id);
    label.innerHTML = data.title;
    item2.appendChild(label);

    var img = document.createElement('img');
    img.className ='crossed-out';
    img.setAttribute('src', 'https://neto-api.herokuapp.com/hj/3.3/cart/soldout.png?10994296540668815886');
    label.appendChild(img)
    item2.addEventListener('click', e => {
      input.setAttribute('checked', 'checked');
    })
  }
};

const btnAddToCart = document.getElementById('AddToCart'); // кнопка
btnAddToCart.addEventListener('click', addProdToCart);

function addProdToCart() {
  event.preventDefault()
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://neto-api.herokuapp.com/cart');
  xhr.addEventListener('load', () => {
    let data = JSON.parse(xhr.response);
    console.log(data[0]);
   addSnipetCart(data[0])
  });
  const form = new FormData();
  form.append('productId', '2721888517');
  form.append('quantity', '1');
  xhr.send(form);
};

function addSnipetCart(data) {
  let item = document.getElementById('quick-cart');
  let text =
`<div class="quick-cart-product quick-cart-product-static" id="quick-cart-product-${data.id}" style="opacity: 1;">
  <div class="quick-cart-product-wrap">
    <img src="${data.pic}" title="${data.title}">
    <span class="s1" style="background-color: #000; opacity: .5">$800.00</span>
    <span class="s2"></span>
  </div>
  <span class="count hide fadeUp" id="quick-cart-product-count-${data.id}">${data.quantity}</span>
  <span class="quick-cart-product-remove remove" data-id="${data.id}"></span>
</div>`;
item.innerHTML = text;

let quick = document.createElement('a');
quick.id='quick-cart-pay';
quick.setAttribute('quickbeam', 'cart-pay');
quick.className='cart-ico';
if(data.quantity>0) {
  quick.classList.add('open')
}
let span =
  `<span>
    <strong class="quick-cart-text">Оформить заказ<br></strong>
    <span id="quick-cart-price">$${data.price}</span>
  </span>`;
  quick.innerHTML = span;
  item.appendChild(quick);
}
