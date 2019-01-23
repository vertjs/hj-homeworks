'use strict';
var counter = document.getElementById('counter');
var increment = document.getElementById('increment');
var decrement = document.getElementById('decrement');
var reset = document.getElementById('reset');

increment.addEventListener('click', numIncrease);
decrement.addEventListener('click', numDecrease);
reset.addEventListener('click', numReset);

var countText = localStorage.getItem('num');
counter.textContent = countText *1;

function numIncrease() {
    ++counter.textContent;
    saveNum();
  };

  function numDecrease() {
    if( counter.textContent == 0 ) {
      return;
    } else {
      --counter.textContent;
      saveNum();
    }
  };

  function numReset() {
    counter.textContent = 0;
    saveNum();
  };

function saveNum() {
  return localStorage.setItem('num', counter.textContent + " ");
}
