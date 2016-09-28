'use strict';


const app = require('../app');
// const hideBoard = require('../game/events.js');

//put it in app because there isnt any real code
// we do this to avoid circular dependency
//this way we can share data from one file and share
//among all the different files that depend on that data

const showOtherButtons = function (){
  $('.cambiopass').css('display', 'block');
  $('.byescreen').css('display', 'block');
};

const showLogInButtons = function (){
  $('.ingresa').css('display', 'block');
  $('.register').css('display', 'block');
};

const hideBoard2 = function () {
  $('.board').css('display', 'none');
};

const hideOtherButtons = function (){
  $('.cambiopass').css('display', 'none');
  $('.byescreen').css('display', 'none');
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
  showLogInButtons();
  hideBoard2();
  hideOtherButtons();
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
