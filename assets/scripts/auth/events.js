'use strict';

// const gameLogic = require('../../../gameLogic.js');
const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

//the event object has an event form whihin it. object that can pass through
//event.defualt prevent us from refreshing the page

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

//ADD LATERRRRRRRRRRRR
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






// const onClick = () => {
//   event.preventDefault();
//   let cell = $(event.target);
//   let id = cell.data('id');
//   if (gameLogic.isEmpty(id)) {
//     api.takeTurn(id)
//       .done(makeMove)
//       .fail(ui.failure);
//   } else {
//     // cell taken
//   }
// };
//
// const moveAction = (data) => {
//   let result = gameLogic.takeTurnSuccess(data);
//   // if takeTurnSuccess, which checks for win conditions, returns a win, then:
//   api.endGame()
//     .done()
//     .fail();
// };



// const xTurn = true;
//   let numMoves
//    = 0;
//   let merp;
//     function tic(element) {
//       const value = square.value;
//       let button0 = document.getElementById("0").value;
//       let button1 = document.getElementById("1").value;
//       let button2 = document.getElementById("2").value;
//       let button3 = document.getElementById("3").value;
//       let button4 = document.getElementById("4").value;
//       let button5 = document.getElementById("5").value;
//       let button6 = document.getElementById("6").value;
//       let button7 = document.getElementById("7").value;
//       let button8 = document.getElementById("8").value;
//
//     for (numMoves
//        = 0; numMoves
//         < 2; numMoves
//         ++) {
//       console.console.log(numMoves
//       );
//
//       if (button0 = "X") {
//         merp = document.getElementById("1").value = "O";
//         xTurn == true;
//       }
//
//       if (button1 = "X") {
//         merp = document.getElementById("2").value = "O";
//         xTurn = true;
//                 }
//
//       if (button2 = "X") {
//         merp = document.getElementById("3").value = "O";
//         xTurn = true;
//         }
//
//       if (button3 == "X") {
//         merp = document.getElementById("4").value = "O";
//         }
//       }
//
//
//     for (numMoves= 2; numMoves< 3; numMoves++) {
//       if ("button1" == "X") {
//         merp = document.getElementById("6").value = "O";
//         xTurn = true;
//         }
//       }
//
//       if (value != "X" && value != "O") {
//         if (xTurn == true) {
//         square.value = "X";
//         return xTurn = false;
//         numMoves++;
//         }
//         else if (xTurn == false) {
//         square.value = "O";
//         return xTurn = true;
//         numMoves++;
//         }
//       }
//         else {
//         alert("That square has been clicked.");
//         }
//       }


// const mover = 'X';
//   let xMove = new Array();
//   let oMove = new Array();
//   let gameOver = false;
//   let winningCond = new Array('a/ab/ac','ba/bb/bc','ca/cb/cc','aa/ba/ca','ab/bb/cb','ac/bc/cc','aa/bb/cc','ac/bb/ca');
//   let whoWon = '';
//




module.exports = {
  addHandlers,
  // gameLogic,
  // xTurn,
  // numMoves,
  // merp,
  // tic,

  // onClick,
  // moveAction,
};
