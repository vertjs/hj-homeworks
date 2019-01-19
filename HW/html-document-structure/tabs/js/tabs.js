'use strict';

const tabs = document.querySelector('.tabs-nav');
const tabs_content = document.querySelectorAll('[data-tab-title]');
const arrContentTabs = Array.from(tabs_content); //массив текстов

arrContentTabs.forEach(function(el, i) {
  tabs.appendChild(tabs.firstElementChild.cloneNode(true));
})

tabs.removeChild(tabs.firstElementChild);

const listTabs = tabs.querySelectorAll('li');
const listA = tabs.querySelectorAll('a'); //4
const arrListA = Array.from(listA); //4
const arrListTabs = Array.from(listTabs); // массив вкладок


for(var i = 0; i < tabs_content.length; i++) {
  arrListA[i].textContent = tabs_content[i].getAttribute("data-tab-title");
  arrListA[i].classList.add(tabs_content[i].getAttribute("data-tab-icon"));
}


arrListTabs.forEach(el => el.addEventListener('click', showContent))
showContent.call(tabs.firstElementChild)


function showContent(event) {
  const tab = event ? event.currentTarget : this;

  if(tabs.querySelector('.ui-tabs-active')) {
    tabs.querySelector('.ui-tabs-active').classList.remove('ui-tabs-active')
  } else {
    tab.classList.add('ui-tabs-active');
  }

  arrContentTabs.forEach(el => {
    if (el.dataset.tabTitle === tab.firstElementChild.textContent) {
            el.classList.remove('hidden');
        } else {
            el.classList.add('hidden');
        }
  })
}
