'use strict';

const from = document.getElementById('from');
const to = document.getElementById('to');
const loader = document.getElementById('loader');
const content = document.getElementById('content');
const result = document.getElementById('result');
const source = document.getElementById('source');
loader.classList.remove('hidden');

var xhr = new XMLHttpRequest();
xhr.addEventListener("load", onload);
xhr.open("Get", "https://neto-api.herokuapp.com/currency", true);
xhr.send();

function onload() {
  const data = JSON.parse(xhr.responseText)

  data.forEach(el => {
    const option = document.createElement('option');
    option.innerHTML = el.code;
    from.appendChild(option);
    const optionTo = option.cloneNode(true);
    to.appendChild(optionTo)
    loader.classList.add('hidden');
    content.classList.remove('hidden');
  });

  source.addEventListener('input', oninput);
  from.addEventListener('input', oninput);
  to.addEventListener('input', oninput);
  
    function oninput(event) {
      var resultTo = data.filter(function(obj) {
        return obj.code == to.value;
      })

      var resultFrom = data.filter(function(obj) {
        return obj.code == from.value;
      })
      result.value = (resultFrom[0].value/resultTo[0].value * source.value).toFixed(2);
    };
};



result.value = source.value;
