'use strict';

 const app = require('../app');

// keep eye on the names used as the form id. they correlate to the end points
//that are being assigned to the url's value here.


const newGame = () => {
  return $.ajax({
    url: app.host+ '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    // data,
  });
};

const updateGame = (index, value, over1) => {
  return $.ajax({
    url: app.host + '/games/' + app.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': value,
        },
        'over': over1,
      }
    }
  });
};

const indexGames = () => {
  return $.ajax({
    url: app.host + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }
  });
};


// const historyGames = () => {
//   return $.ajax({
//     url: app.host + '/games/',
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + app.user.token
//     },
//   });
// };

// const getGameById = function (data){
//   return $.ajax({
//     url: app.host + '/games/' + data.getGameById,
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + app.user.token
//     },
//   });
// };

// const joinGame = function (data) {
//   return $.ajax({
//     url: app.host+ '/games/' + data.game.id,
//     method: 'POST',
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     }});
// };




module.exports = {
  newGame,
  updateGame,
  indexGames,
  // getGameById,
  // historyGames,
  // joinGame,
};
