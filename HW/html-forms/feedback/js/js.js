"use strict";

const butSend = document.getElementsByClassName('button-contact')[0];
const butEdit = document.getElementsByClassName('button-contact')[1];
      butEdit.addEventListener('click', toggleClass);
const inputs = document.getElementsByTagName('input');
const arr = Array.from(inputs);
const index = document.querySelector('input[name="zip"]');
const contentform = document.querySelector('.contentform');
const output = document.getElementById('output');
const outputIds = output.querySelectorAll('#name, #lastname, #company, #role, #zip, #city, #address, #subject, #message');
const arrIds = Array.from(outputIds);
const textarea = document.querySelector('textarea');
      textarea.addEventListener('input', onchange);

arr.forEach(el => el.addEventListener('change', onchange));

function onchange(event) { // разблокировка кн.Отправить сообщение
  var keys = [];
  for(var i = 0; i < arr.length; i++) {
    if(arr[i].value !== null) {
      keys.push(arr[i].value.trim())
    }
  };
keys.push(textarea.value.trim())

function nonNull(k) {
  return k != '';
}
keys.every(nonNull);

if( keys.every(nonNull) ) {
    butSend.removeAttribute('disabled');
    butSend.addEventListener('click', sendMessage);
  } else {
    butSend.setAttribute('disabled', '');
  }

  function sendMessage(event) {
    event.preventDefault();
    toggleClass();

    for(let output of arrIds) {
      console.log(output);
      output.value = contentform.querySelector(`[name = ${output.id}]`).value;
    }

  };
};

index.addEventListener('keydown', showZip); // проверка клавиш при вводе индекса
function showZip(event) {
  if  (event.keyCode > 57 && event.keyCode < 96 || event.keyCode > 105 || event.keyCode < 37 && event.keyCode > 8) {
    event.preventDefault();
  }
};


function toggleClass() { // открыть/закрыть форму
  contentform.classList.toggle('hidden');
  output.classList.toggle('hidden');
};
