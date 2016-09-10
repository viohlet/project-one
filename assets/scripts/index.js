'use strict';

const authEvents = require('./auth/events');
const gameEvents = require('./game/events');




$(() => {
  authEvents.addHandlers();
  gameEvents.addHandlers();
});







// 'use strict';
//
// // user require with a reference to bundle the file and use it in this file
// // var example = require('./example');
//
// // use require without a reference to ensure a file is bundled
// const gameEvents = require('./game-ui.js');
// const authEvents = require('./auth/info-events.js');
//
// // On document ready add the event handlers to the DOM nodes
// $(() => {
//   gameEvents.attachGameLogic();
//   authEvents.addHandlers();
//   $('.select-sign-up').on('click', function(){
//     $('.sign-up-modal').modal('show');
//   });
//   $('.select-sign-in').on('click', function(){
//     $('.sign-in-modal').modal('show');
//   });
//   $('.select-change-password').on('click', function(){
//     $('.change-password-modal').modal('show');
//   });
//   $('.sign-up-btn').on('click', function(){
//     $('.sign-up-modal').modal('hide');
//   });
//   $('.sign-in-btn').on('click', function(){
//     $('.sign-in-modal').modal('hide');
//   });
//   $('.change-password-btn').on('click', function(){
//     $('.change-password-modal').modal('hide');
//   });
//   $('#get-game').on('click', function(){
//     $('.get-game-id-modal').modal('show');
//   });
//   $('.get-game-id-btn').on('click', function(){
//     $('.get-game-id-modal').modal('hide');
//   });
// });
