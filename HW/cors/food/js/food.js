'use strict';

function addScript(callbackName, url) {
   return new Promise((done, fail) => {
    var elem = document.createElement("script");
    elem.setAttribute("type", "text/javascript");
    elem.src = `${url}?callback=${callbackName}`;
    document.body.appendChild(elem);
    window.callbackName = done;
    console.log(callbackName, url);
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
  document.querySelector('[data-rating]').textContent = data.rating;
  document.querySelector('[data-votes]').textContent = `(${data.votes} Оценок)`;
};

addScript('addConsumers', 'https://neto-api.herokuapp.com/food/42/consumers');

function addConsumers(data) {
  for(let key in data.consumers) {
    let i = document.createElement("img");
    i.src = data.consumers[key].pic;
    i.title = data.consumers[key].name;
    console.log(i);
    document.querySelector('[data-consumers]').appendChild(i)
  }

}
