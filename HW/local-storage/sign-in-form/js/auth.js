'use strict';

var outputMessage, outputMessageVariable;
const forms = document.getElementsByTagName('form');

for(let form of forms) {
  form.addEventListener('click', sendByClick);
    function sendByClick(event) {
      if(event.target.classList.contains('button')) {
        event.preventDefault();
        sendForm(event.currentTarget)
      }
    }
};

function sendForm(data) {
  var obj = stringifyObj(data);
  outputMessage = data.querySelector(".error-message");
  const xhr = new XMLHttpRequest();
  xhr.open('POST', getURL(data));
  xhr.addEventListener('load', () => responseHandler(JSON.parse(xhr.response)));
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(obj);
};

function getURL(data) {
  if(data.classList.contains('sign-in-htm')) {
    outputMessageVariable = "авторизован";
    return 'https://neto-api.herokuapp.com/signin';
  } else if(data.classList.contains('sign-up-htm')) {
    outputMessageVariable = "зарегистрирован";
    return 'https://neto-api.herokuapp.com/signup';
  }
};

function responseHandler(res) {
  if (res.error) {
    outputMessage.textContent = res.message;
  } else {
    outputMessage.textContent = `Пользователь ${res.name} успешно ${outputMessageVariable}`;
  }
};

function stringifyObj(data) {
  const formData = new FormData(data);
  var obj ={};
  for(var [i, v] of formData) {
    obj[i]=v;
  }
  return JSON.stringify(obj);
};
