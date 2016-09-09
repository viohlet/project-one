'use strict';

const xWins = require('../../../moves');
const oWins = require('../../../moves');
const getFormFields = require('../../../lib/get-form-fields');

const array = require('../ui.js');
const api = require('./api');
const ui = require('./ui');

//prevents page from refreshing and calls a function from ./api
//the function it calls from ./api sends an ajax request to sign a new user up
const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  api.signUp(data)
    .done(ui.success)
    .fail(ui.failure);
};

//prevents page from refreshing and calls function from ./api
//the function it calls from ./api checks to see if user exists, if they do it
//logs them in
const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(this);
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.failure);
  };

//prevents page from refreshing and calls function from ./api
//the function it calls from ./api checks to see if old password is correct. if
//it is it changes the value to the new password
const onChangePassword = function onChangePassword(event) {
  let data = getFormFields(this);
  console.log(data);
  event.preventDefault();
  api.changePassword(data)
  .done(ui.success)
  .fail(ui.failure);
  };

//prevents page from refreshing and calls function from ./api
//the function it calls from ./api deletes the token attached to the user
const onSignOut = function onSignOut(event){
  event.preventDefault();
  api.signOut()
  .done(ui.signOutSuccess)
  .fail(ui.failure);
};


//prevents page from refreshing and calls function from ./api
//the function it calls from ./api creates a new game with unique game id and
//attaches it to the user logged in
const onNewGame = function onNewGame(event){
  event.preventDefault();
  $('.tile').text('');
  $('.tile').data('val', '0');
  let data = {};
  api.newGame(data)
    .done(ui.newGameSuccess)
    .fail(ui.failure);
};

const onGetGames = function onGetGames(event){
  event.preventDefault();
  api.getGames()
    .done(ui.getGamesSuccess)
    .fail(ui.failure);
};

const onGetGame = function onGetGame(event){
  let data = getFormFields(this);
  console.log(data.id);
  array.boardArray = data.cells;
  event.preventDefault();
  api.getGame(data)
    .done(ui.getGameSuccess)
    .fail(ui.failure);
};

const boardArray = function(){
  console.log("xWins, oWins");
};


const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('.other-sign-out').on('click', onSignOut);
  $('.new-game').on('click', onNewGame);
  $('#get-games').on('click', onGetGames);
  $('#game-by-id').on('submit', onGetGame);
  $(".tile").on('click', boardArray);
  };

module.exports = {
  addHandlers,
};
