'use strict';

const app = require('../app');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.log(error);
};

const showBoard = function (){
  $('.board').css('display', 'block');
};

// const showLogInButtons = function (){
//   $('.ingresa').css('display', 'block');
//   $('.register').css('display', 'block');
// };

const newGameSuccess = (data) => {
  app.game = data.game;
  console.log(data);
  showBoard();
  // showLogInButtons();
};

const onIndexGamesSuccess = (data) => {
  document.getElementById("message").innerHTML = 'Games played: '+ data.games.length;
  $('#message').fadeIn('fast').delay(4000).fadeOut('fast');
};

// const joinGameSuccess = (data) => { ///add?
//   app.game = data.game;
//   console.log(app.game);
// };

// const updateGameSuccess = (data) => {
//   app.game = data.game;
//   console.log(app.game);
// };

// const getGameByIdSuccess = (data) => {
//   app.game = data.game;
//   // $(".game-id-append").append('<h1>'+ data.game.player_x.email + '  was the player'+ '</h1>');  //oops?
//   console.log(data);
// };

// const historyGamesSuccess = (data) => { //add
//   app.game = data.game;
//   console.log(app);
// };


module.exports = {
  success,
  failure,
  newGameSuccess,
  onIndexGamesSuccess,
  // updateGameSuccess,
  // getGameByIdSuccess,
  // historyGamesSuccess,
  // joinGameSuccess,
};
