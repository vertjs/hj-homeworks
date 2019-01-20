'use strict';

var n = 1;

function handleTableClick(event) {
  if(event.target.tagName === "TH") {
    if(n === 1) {
        var attribute = event.target.getAttribute("data-prop-name");
        n=-1;
        sortTable(attribute, n);
        event.currentTarget.setAttribute('data-sort-by', attribute);
        event.target.setAttribute('data-dir', n);
        return n;
      } else if(n === -1) {
        n=1;
        var attribute = event.target.getAttribute("data-prop-name");
        sortTable(attribute, n);
        event.currentTarget.setAttribute('data-sort-by', attribute);
        event.target.setAttribute('data-dir', n);

        return n;
      }
  } else return;
}
