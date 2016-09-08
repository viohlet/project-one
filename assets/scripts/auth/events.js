'use strict';


const api = require('./api');
const ui = require('./ui');
const getFormFields = require('../../../lib/get-form-fields');

//the event object has an event form whihin it. object that can pass through
//event.defualt prevent us from refreshing the page
// this is event.target. use event.target for now

const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
    .done(ui.success)
    .fail(ui.failure);
};

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
    .done(ui.signInSuccess)
    .fail(ui.failure);
  };


// const onSignOut = function(event){
//   event.preventDefault();
//   let data = getFormFields(event.target);
//   api.signOut(data)
//   .done(ui.signOutSuccess)
//   .fail(ui.fail);
// };



//// NO SE SI ESTE TA BN
const success = (data) => {
  console.log(data);
};

const failure = (data) => {
  console.log(data);
};

  // const changePasswordSuccess =  function (){
  //   console.log('Password success change');
  // };
  // let data = getFormFields(event.target);
  // api.signIn(data)
  //   .done(ui.signInSuccess)
  //   .fail(ui.failure);
  // };

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  // $('#sign-out').on('submit', onSignOut);
  // $('#change-password').on('submit', onChangePassword);
};






const onClick = () => {
  event.preventDefault();
  let cell = $(event.target);
  let id = cell.data('id');
  if (gameLogic.isEmpty(id)) {
    api.takeTurn(id)
      .done(makeMove)
      .fail(ui.failure);
  } else {
    // cell taken
  }
};

const moveAction = (data) => {
  let result = gameLogic.takeTurnSuccess(data);
  // if takeTurnSuccess, which checks for win conditions, returns a win, then:
  api.endGame()
    .done()
    .fail();
};



module.exports = {
  addHandlers,
  onClick,
  moveAction,
};
