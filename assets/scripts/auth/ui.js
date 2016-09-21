'use strict';


const app = require('../app');
//put it in app because there isnt any real code
// we do this to avoid circular dependency
//this way we can share data from one file and share
//among all the different files that depend on that data

const signInSuccess = (data) => {
  app.user = data.user; //can use app.user or app.token. we know this because the
  console.log(app);
  $('.app').css("display", "block"); //even though we did not define one. User contains the
  $('.space').text('');
  // hide sign up button
  // hide sign in button
  // show password button
  $('h1').text('');   //console in browser told us that we have the key user
                      //even though we did not define one. User contains the
};                    //token that we care about

const signOutSuccess = () =>{
  delete app.user;
  console.log(app);
  $('.app').css("display", "none");
};

const changePasswordSuccess = () => {
  // app.user = data.user;
  console.log(app);
};

const signUpSuccess = (data) => {
 app.user = data.user;
};

const success = (data) => {
  if(data){
  console.log(data);
  }
};

const failure = (error) => {
  console.error(error);
};


module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  signUpSuccess,
};
