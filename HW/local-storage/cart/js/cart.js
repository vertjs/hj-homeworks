'use strict';

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://neto-api.herokuapp.com/cart/colors');
xhr.send();
xhr.addEventListener('load', onLoad);

function onLoad() {
  var result = JSON.parse(xhr.response)
  console.log(result);
  var item = document.querySelector('#colorSwatch > div');

  for(var i=0; i < result.length; i++) {
    var item2 = document.createElement('div')
  //  item2.addEventListener('click', chek)
    item2.dataset.value=result[i].type;
    item2.className ='swatch-element color';
    item2.classList.add(result[i].type)
    if(result[i].isAvailable){
      item2.classList.add('available')

    } else{
      item2.classList.add('soldout')
      console.log(item2);
      //document.querySelector('item2 > input').setAttribute('disabled', 'disabled')
    }

    item.appendChild(item2)
    var item3 = document.createElement('div')
    item3.className ='tooltip'
    item3.innerHTML=result[i].title;
    item2.appendChild(item3)
    var item4 = document.createElement('input')
    item4.setAttribute('quickbeam','color')
    item4.id='swatch-1-red'
    item4.setAttribute('type','radio')
    item4.setAttribute('name','color')
    item4.setAttribute('value', result[i].type)
  //  item4.setAttribute('checked', 'checked')
    item2.appendChild(item4)
    var item5 = document.createElement('label')
     item5.setAttribute('for', item4.id)
     item5.setAttribute('style',`border-color: ${result[i].type}`)
     item2.appendChild(item5)
     var span = document.createElement('span')
     span.setAttribute('style',`background-color: ${result[i].type}`)
     item5.appendChild(span)
     var img = document.createElement('img')
     img.className ='crossed-out'
     img.setAttribute('src', document.getElementsByClassName('thumb-image')[i].href)
     item5.appendChild(img)
    console.log(item);
  }
  function chek(event) {

    if(event) {
      Array.from(item).forEach(el=>el.removeAttribute('checked'))
      event.currentTarget.querySelector('input').setAttribute('checked', 'checked')
      console.log(event.currentTarget.querySelector('input'));
    }

  }

}

const btnAddToCart = document.getElementById('AddToCart');
btnAddToCart.addEventListener('click', addProdToCart);

function addProdToCart() {
  event.preventDefault()
  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://neto-api.herokuapp.com/cart');
  xhr.addEventListener('load', () => console.log(JSON.parse(xhr.response)) );
  const form = new FormData();
  form.append('productId', '2721888517');
  xhr.send(form);
}
