'use strict';

 const app = require('../app');
// keep eye on the names used as the form id. they correlate to the end points
//that are being assigned to the url's value here.


const historyGames = () => {
  return $.ajax({
    url: app.api + '/games/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
  });
};

const getGameById = function (data){
  return $.ajax({
    url: app.api + '/games/' + data.game.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
  });
};

const newGame = () => {
  return $.ajax({
    url: app.api+ '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }});
};

const joinGame = function (data) {
  return $.ajax({
    url: app.api+ '/games/' + data.game.id,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }});
};


module.exports = {
  newGame,
  getGameById,
  historyGames,
  joinGame,
};
