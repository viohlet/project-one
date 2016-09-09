'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
// const gameEvents = require('./ui.js');
const authEvents = require('./auth/events.js');

// On document ready add the event handlers to the DOM nodes
// $(() => {
//   gameEvents.attachGameLogic();
//   authEvents.addHandlers();
// });

$(() => {
  authEvents.addHandlers(); //whatever is in here is what gets run
});
