'use strict';

const app = require('../app');


// BORRA DSPS app.host has been REPLACED BY app.api check

//ajax requesting server a new user
const signUp = (data) => {
return $.ajax({
    url: app.api + 'sign-up',
    method: 'POST',
    data,
  });
};

//ajax request for user to sign in
const signIn = (data) => {
return $.ajax({
    url: app.api + 'sign-in',
    method: 'POST',
    data,
  });
};

//ajax request to change a user's password
const changePassword = (data) => {
  return $.ajax({
    // http://localhost:3000/change-password
    url: app.api + 'change-password/' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data,
  });
};

//ajax request to sign a user out, deletes their token
const signOut = () => {
  return $.ajax({
    url: app.api + 'sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }
  });
};

module.exports = {
  signIn,
  signUp,
  signOut,
  changePassword,
};
