'use strict';

const app = require('../app');

//this data is the data b4 the fat arrow here in this doc

const signUp = (data) => {
return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data: data,
  });
};

const signIn = (data) => {
return $.ajax({
    url: app.host + '/sign-in',
    method: 'POST',
    data: data,
  });
};

const signOut = () => {
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    }
  });
};

//  MORE STUGFF change pass and get new game, HOSTORY and get new game - JORDAN

// const changePassword = (data) => {
//   return $.ajax({
//     // http://localhost:3000/change-password
//     url: app.host + '/change-password/' + app.user.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     },
//     data: data,
//   });
// };


module.exports = {
  signIn,
  signUp,
  signOut
  // changePassword
};
