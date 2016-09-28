'use strict';


const app = require('../app');
//put it in app because there isnt any real code
// we do this to avoid circular dependency
//this way we can share data from one file and share
//among all the different files that depend on that data

const showOtherButtons = function (){
  $('.cambiopass').css('display', 'block');
  $('.byescreen').css('display', 'block');
};


// const hideLogInsButton = function () {
//   $('.ingresa').css('display', 'none');
// 	$('.register').css('display', 'none');
// };

const signInSuccess = (data) => {
  app.user = data.user; //can use app.user or app.token. we know this because the
  console.log(app);
  // $('.app').css("display", "block");
  // $('.space').text('');
  // $('h1').text('');
  // hideLogInsButton();
  showOtherButtons();
};

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
