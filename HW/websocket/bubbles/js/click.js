'use strict';
const connection = new WebSocket('wss://neto-api.herokuapp.com/mouse');
const canv = document.querySelector('canvas')

connection.addEventListener('open', (event) => showBubbles(connection));

canv.addEventListener('click', (event) => {
  var obj = {};
  obj.x = event.pageX;
  obj.y = event.pageY;
  connection.send(JSON.stringify(obj))
})
connection.addEventListener('error', error => {console.log(`Произошла ошибка: ${error.data}`)});
window.addEventListener('beforeunload', () => {
connection.onclose = function () {};
connection.close()
});
