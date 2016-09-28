'use strict';

const app = require('../app');

const success = () => {
  // console.log(data);
};

const failure = () => {
  // console.log(error);
};

const showBoard = function (){
  $('.board').css('display', 'block');
};

const hideLogInsButton = function () {
  $('.hiscreen').css('display', 'none');
  // $('.ingresa').css('display', 'none');
	// $('.register').css('display', 'none');
};

const newGameSuccess = (data) => {
  app.game = data.game;
  // console.log(data);
  showBoard();
  hideLogInsButton();
};

const onIndexGamesSuccess = (data) => {
  document.getElementById("message").innerHTML = 'Games played: '+ data.games.length;
  $('#message').fadeIn('fast').delay(4000).fadeOut('fast');
};

// const getGameByIdSuccess = (data) => {
//   app.game = data.game;
//   // $(".game-id-append").append('<h1>'+ data.game.player_x.email + '  was the player'+ '</h1>');  //oops?
//   console.log(data);
// };

module.exports = {
  success,
  failure,
  newGameSuccess,
  onIndexGamesSuccess,
  // getGameByIdSuccess,
};
