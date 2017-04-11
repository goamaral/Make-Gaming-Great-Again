"use strict";

document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener('message', messagesHandler);

  function messagesHandler(ev) {
    console.log(ev.data);
  }
});

window.onload = function() {
  let buttons = [];
  buttons.push(document.getElementsByTagName('button')[0]);
  buttons.push(document.getElementById('backButton'));
  console.log(buttons);

  for( let button of buttons ) {
    button.onclick = buttonClickHandler;
  }

  function buttonClickHandler(ev) {
    console.log('clicked');
    talkWithParent(ev.target.id)
  }
};

function talkWithParent(msg) {
  parent.postMessage(msg, '*');
}