'use strict';

const tabs = document.querySelector('.tabs-nav');
const tabs_content = document.querySelectorAll('[data-tab-title]');
const arrContentTabs = Array.from(tabs_content); //массив текстов

arrContentTabs.forEach(function(el, i) {
  tabs.appendChild(tabs.firstElementChild.cloneNode(true));
})

tabs.removeChild(tabs.firstElementChild);
arrContentTabs.forEach(el =>el.classList.add('hidden'));

const listTabs = tabs.querySelectorAll('li');
const listA = tabs.querySelectorAll('a');
const arrListA = Array.from(listA);
const arrListTabs = Array.from(listTabs); // массив вкладок

for(var i = 0; i < tabs_content.length; i++) {
  arrListA[i].textContent = tabs_content[i].getAttribute("data-tab-title");
  arrListA[i].classList.add(tabs_content[i].getAttribute("data-tab-icon"));
};

arrListTabs.forEach(el => el.addEventListener('click', showContent))
document.addEventListener('DOMContentLoaded', firstElementChild);

function firstElementChild() {
  tabs.firstElementChild.classList.add('ui-tabs-active');
  arrContentTabs[0].classList.remove('hidden')
};

function showContent(event) {
  arrListTabs.forEach(el => el.classList.remove('ui-tabs-active'));
  event.currentTarget.classList.add('ui-tabs-active');

  arrContentTabs.forEach(el => {
    if (el.dataset.tabTitle === event.target.textContent) {
            el.classList.remove('hidden');
        } else {
            el.classList.add('hidden');
        }
  })
};
