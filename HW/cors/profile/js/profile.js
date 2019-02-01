'use strict';

const content = document.querySelector('.content');
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

addScript('addTechno', 'https://neto-api.herokuapp.com/profile/me')

function spanTechno(data) {
  const technologies = document.querySelector('[data-technologies]');
  for (const d in data) {
  const sp = document.createElement('span');
  sp.classList.add('devicons', `devicons-${data[d]}`);
  technologies.appendChild(sp);
}
}

function addTechno(data) {
  for (const d in data) {
   switch(d) {
    case 'id':
      addScript('spanTechno', `https://neto-api.herokuapp.com/profile/${data[d]}/technologies`)
        .then(content.removeAttribute('style'));
      break;
    case 'pic':
      document.querySelector(`[data-${d}]`).src = replaceUrl(data[d]);
    break;
    default:
      document.querySelector(`[data-${d}]`).textContent = data[d];
    }
  }
}

function replaceUrl(url) {
  return url.replace('\me', '/');
}
