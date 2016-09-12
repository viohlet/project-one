'use strict';

const app = require('../app');


//ajax requesting server a new user
const signUp = (data) => {
return $.ajax({
    url: app.host + 'sign-up',
    method: 'POST',
    data,
  });
};

//ajax request for user to sign in
const signIn = (data) => {
return $.ajax({
    url: app.host + 'sign-in',
    method: 'POST',
    data,
  });
};

//ajax request to change a user's password
const changePassword = (data) => {
  return $.ajax({
    url: app.host + 'change-password/' + app.user.id,
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
    url: app.host + 'sign-out/' + app.user.id,
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
