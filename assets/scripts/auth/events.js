'use strict';

// const gameLogic = require('../../../gameLogic.js');
const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

//the event object has an event form whihin it. object that can pass through
//event.defualt prevent us from refreshing the page

const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
    .done(ui.success)
    .fail(ui.failure);
};

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.failure);
  };


const onSignOut = function(event){
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signOut(data)
  .done(ui.signOutSuccess)
  .fail(ui.fail);
};


//// NO SE SI ESTE TA BN
const success = (data) => {
  console.log(data);
};

const failure = (data) => {
  console.log(data);
};

const onChangePassword = function onChangePassword(event) {
  let data = getFormFields(this);
  console.log(data);
  event.preventDefault();
  api.changePassword(data)
  .done(ui.success)
  .fail(ui.failure);
};


// const onGetGamesById = function onGetGamesById(event) {
//   let data = getFormFields(this);
//   console.log(data.id);
//   event.preventDefault();
//   api.getGamesById(data)
//     .done(ui.getGamesByIdSuccess)
//     .fail(ui.failure);
//   };

// const onNewGame = function (event) {
//   event.preventDefault();
//   api.newGame()
//   .done(ui.newGameSuccess)
//   .fail(ui.failure);
// };
// const onUpdateGame = function onUpdateGame(marker, index, over) {
// 	  event.preventDefault();
// 	  api.updateGame(marker, index, over)
//     .done(ui.updateGameSuccess)
//     .fail(ui.failure);
// 	};


const makeMove = function(){
  console.log("tile selected");
};

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  // $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);
  // $(".tile").on('click', makeMove);
  // $('#game-id').on('submit', onGetGamesById);
  // $('.new-game').on('click', onNewGame);
};


module.exports = {
  addHandlers,
  // onUpdateGame,
};
