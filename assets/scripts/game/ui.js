'use strict';

const app = require('../app');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.log(error);
};

const newGameSuccess = (data) => {
  app.game = data.game;
  console.log(app.game);
};

const joinGameSuccess = (data) => { ///add?
  app.game = data.game;
  console.log(app.game);
};

const updateGameSuccess = (data) => {
  app.game = data.game;
  console.log(app.game);
};

const getGameByIdSuccess = (data) => {
  app.game = data.game;
  // $(".game-id-append").append('<h1>'+ data.game.player_x.email + '  was the player'+ '</h1>');  //oops?
  console.log(data);
};

// $('#cambiopass').on('click', function () {
//   $(this).button('complete') // button text will be "finished!"
// };

// $('#cambiopass').on('shown.bs.modal', function () {
//   $('#cambiopass').focus();
// });

//   const getGameSuccess = (data) => {
//     if(data.games){
//       console.log(data.games);
//   } else{
//     console.log('fail');
//   }
// };

const historyGamesSuccess = (data) => { //add
  app.game = data.game;
  console.log(app);
};


module.exports = {
  success,
  failure,
  newGameSuccess,
  updateGameSuccess,
  getGameByIdSuccess,
  historyGamesSuccess,
  joinGameSuccess,
};
