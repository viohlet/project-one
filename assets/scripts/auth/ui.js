'use strict';


const app = require('../app');

const signInSuccess = (data) => {
  app.user = data.user;
  console.log(app);
  // debugger;
};

// const changePasswordSuccess () =>
//   console.log('Password successfully changed.');
// };

// const signOutSuccess = (data) => {
//   app.user = null;
//   console.log('Sucessfully signed out.');
// };

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

module.exports = {
  failure,
  success,
  signInSuccess,
  //signOutSuccess
  // changePasswordSuccess,
};
