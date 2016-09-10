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

module.exports = {
  success,
  failure,
  newGameSuccess,
};
