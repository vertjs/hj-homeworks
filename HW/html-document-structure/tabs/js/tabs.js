'use strict';

const tabs = document.querySelector('.tabs-nav');
const tab1 = tabs.firstElementChild;
const tab2 = tab1.cloneNode(true);
const tab3 = tab1.cloneNode(true);
tabs.appendChild(tab2);
tabs.appendChild(tab3);
const listTabs = tabs.querySelectorAll('li');
const listA = tabs.querySelectorAll('a');
const arrListTabs = Array.from(listTabs); // массив вкладок
const arrListA = Array.from(listA); // массив тегов 'a'
const tabs_content = document.querySelectorAll('[data-tab-title]');
const arrContentTabs = Array.from(tabs_content); //массив текстов
document.addEventListener('DOMContentLoaded', primaryDisplay);

function primaryDisplay(event) {
  arrContentTabs.forEach(el => el.classList.add('hidden'));
  arrContentTabs[0].classList.remove('hidden');
  arrListTabs[0].classList.add('ui-tabs-active');
}

for(var i = 0; i < tabs_content.length; i ++) {
  arrListA[i].textContent = tabs_content[i].getAttribute("data-tab-title");
  arrListA[i].classList.add(tabs_content[i].getAttribute("data-tab-icon"));
}
arrListTabs.forEach(el => el.addEventListener('click', showContent))

var ind=0;
function showContent(event) {
  arrListTabs.forEach(el => el.classList.remove('ui-tabs-active'));
  arrContentTabs.forEach(el => el.classList.add('hidden'));
  event.currentTarget.classList.add('ui-tabs-active');
  ind = arrListTabs.indexOf(event.currentTarget)
  tabs_content[ind].classList.remove('hidden');
}
