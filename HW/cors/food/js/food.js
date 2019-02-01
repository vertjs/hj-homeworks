'use strict';

function addScript(callbackName, url) {
   return new Promise((done, fail) => {
    var elem = document.createElement("script");
    elem.setAttribute("type", "text/javascript");
    elem.src = `${url}?callback=${callbackName}`;
    document.body.appendChild(elem);
    window.callbackName = done;
  })
};

addScript('recipe', 'https://neto-api.herokuapp.com/food/42');

function recipe(data) {
  const pic = document.querySelector('[data-pic]');
  pic.style.backgroundImage = `url(${data.pic})`;
  document.querySelector('[data-title]').textContent = data.title;
  document.querySelector('[data-ingredients]').textContent = data.ingredients;
};

addScript('addRating', 'https://neto-api.herokuapp.com/food/42/rating');

function addRating(data) {
  let num = data.rating.toFixed(2)
  let stars = document.querySelector('[data-star]');
  stars.style.width = num * 100/10 +'px'
  document.querySelector('[data-rating]').textContent = num;
  document.querySelector('[data-votes]').textContent = `(${data.votes} Оценок)`;
};

addScript('addConsumers', 'https://neto-api.herokuapp.com/food/42/consumers');

function addConsumers(data) {
  for(let key in data.consumers) {
    let i = document.createElement("img");
    i.src = data.consumers[key].pic;
    i.title = data.consumers[key].name;
    document.querySelector('[data-consumers]').appendChild(i)
  }
  let span = document.createElement("span");
  span.textContent = `(+${data.total})`;
  document.querySelector('[data-consumers]').appendChild(span)
}
