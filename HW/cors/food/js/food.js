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
}

addScript('recipe', 'https://neto-api.herokuapp.com/food/42');

function recipe(data) {
  const title = document.querySelector('[data-title]');
  title.innerHTML = data.title
  const pic = document.createElement('image');
  sp.classList.add('devicons', `devicons-${data[d]}`);
  technologies.appendChild(sp);
}
}
