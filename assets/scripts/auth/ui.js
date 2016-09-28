'use strict';

const app = require('../app');


const showOtherButtons = function (){
  // $('.cambiopass').css('display', 'block');
  $('.byescreen').css('display', 'block');
};

const signUpSuccess = (data) => {
  app.user = data.user;
  // console.log(data);
  showOtherButtons();
};

const signInSuccess = (data) => {
  app.user = data.user;
  // console.log(app);
  $('.app').css("display", "block");
  // $('.space').text('');
  showOtherButtons();
};


const showLogInButtons = function (){
  $('.hiscreen').css('display', 'block');
  // $('.ingresa').css('display', 'block');
  // $('.register').css('display', 'block');
};

const hideBoard2 = function (){
  $('.board').css('display', 'none');
};

const hideOtherButtons = function (){
  // $('.cambiopass').css('display', 'none');
  $('.byescreen').css('display', 'none');
};


const signOutSuccess = () =>{
  delete app.user;
  // console.log(app);
  $('.app').css("display", "none");
  showLogInButtons();
  hideBoard2();
  hideOtherButtons();
};

const changePasswordSuccess = () => {
  // app.user = data.user;
  console.log(app);
};

const success = (data) => {
  if(data){
  // console.log(data);
  }
};

const failure = () => {
  // console.error(error);
};


module.exports = {
  failure,
  success,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  signUpSuccess,
  // showOtherButtons,
};
