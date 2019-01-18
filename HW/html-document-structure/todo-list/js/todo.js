'use strict';

const todoList = document.querySelector('.todo-list');
const inputs = todoList.querySelectorAll('label > input');
Array.from(inputs).forEach(el => el.addEventListener('click', toggleChecked));
const done = document.querySelector('.done');
const undone = document.querySelector('.undone');


function toggleChecked(event) {
  event.target.toggleAttribute("checked");
  if(event.target.parentElement.parentElement.className === 'done') {
    undone.appendChild(event.target.parentElement)
    console.log('undone')
  } else if(event.target.parentElement.parentElement.className === 'undone') {
    done.appendChild(event.target.parentElement)
    console.log('done')
  };
}
