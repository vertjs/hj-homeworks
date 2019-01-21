'use strict';

const todoList = document.querySelector('.todo-list');
const inputs = todoList.querySelectorAll('label > input');
Array.from(inputs).forEach(el => el.addEventListener('click', toggleChecked));
const done = document.querySelector('.done');
const undone = document.querySelector('.undone');


function toggleChecked(event) {
  if(!event.target.checked) {
    undone.appendChild(event.target.parentElement)
  } else if(event.target.checked) {
    done.appendChild(event.target.parentElement)
  }
};
