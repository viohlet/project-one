'use strict';
const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');

const onSignUp = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.signUp(data)
    .done(ui.success)
    .fail(ui.failure);
};

const onSignIn = function (event) {
  let data = getFormFields(this);
  event.preventDefault();
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.failure);
};

const onChangePassword = function onChangePassword(event) {
  let data = getFormFields(this);
  console.log(data);
  event.preventDefault();
  api.changePassword(data)
    .done(ui.success)
    .fail(ui.failure);
};

const onSignOut = function onSignOut(event) {
  event.preventDefault();
  api.signOut()
    .done(ui.signOutSuccess)
    .fail(ui.failure);
};




const onGetGameById = function onGetGameById(event) {
  let data = getFormFields(this);
  console.log(data.id);
  event.preventDefault();
  api.getGameById(data)
    .done(ui.getGameByIdSuccess)
    .fail(ui.failure);
};

// const onNewGame = function (event) {
//   event.preventDefault();
//   api.newGame()
//   .done(ui.newGameSuccess)
//   .fail(ui.failure);
// };
//
// const onUpdateGame = function onUpdateGame(marker, index, over1){   /// what do i do with you?
// 	  event.preventDefault();
// 	  api.updateGame(marker, index, over1)
//     .done(ui.updateGameSuccess)
//     .fail(ui.failure);
// };

// const onHistoryGames = function (event) {
//   	  event.preventDefault();
//   	  api.historyGames
//       .done(ui.historyGamesSuccess)
//       .fail(ui.failure);
//   	};
//
//   const onJoinGame = function (event) {
//     event.preventDefault();
//     api.joinGame()
//     .done(ui.joinGameSuccess)
//     .fail(ui.failure);
//   };

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn); //grab element from the dom with element
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);    //id on sign-up. Then does something
  $('#game-id').on('submit', onGetGameById);
  // $('.new-game').on('click', onNewGame);
  // $('#join-id').on('click', onJoinGame);
  // $('#history-games').on('click', onHistoryGames);


};
module.exports = {
  addHandlers,
};
