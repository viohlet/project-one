'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');

const onNewGame = function (event) {
  event.preventDefault();
	let data = getFormFields(event.target);
	// console.log();
	// $('.marker').text('');
	// $('.marker').data('val', '0');
	// boardArray[0] === ('');
  api.newGame(data)
  .done(ui.newGameSuccess)
  .fail(ui.failure);
};

const onGetGameById = function (event) {
	event.preventDefault();
	let data = getFormFields(event.target);
	console.log(data);
	api.getGameById(data)
		.done(ui.success)
	  .fail(ui.failure);
};


let turnTracker = 0;
let marker = ' ';
let index;
let over1 = false;
let currentPlayer = ' ';
let boardArray = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
let winner;
// let player = '';


const showMessage = function (msg) {
	document.getElementById("message").innerHTML = msg;
	$('#message').fadeIn('fast').delay(4000).fadeOut('fast');
};

const blockPlay = function(){
	$('.tile').off('click');
};

// const resumePlay = function(){
//   $('.tile').on('tile', onClickTile);
// };

// const newGame = function() {
//   $('#new-game').show();
// 	// console.log();
// };

const resetBoard = function (){
  $('.tile').empty();
  marker = '';
  boardArray = ['','','','','','','','','',];
  turnTracker = 0;
  over1 = false;
  winner = null;
	// resumePlay();
	// onNewGame();
  // removeBoard();
  // resumePlay();
};

// Win Conditions
let checkForWin = function () {
	let win = false;
	// console.log(boardArray);
	if(marker === boardArray[0] && marker === boardArray[1] && marker === boardArray[2] || //horizonts
		marker === boardArray[3] && marker === boardArray[4] && marker === boardArray[5] ||
		marker === boardArray[6] && marker === boardArray[7] && marker === boardArray[8] ||
		marker === boardArray[0] && marker === boardArray[3] && marker === boardArray[6] || //vertical
		marker === boardArray[1] && marker === boardArray[4] && marker === boardArray[7] ||
		marker === boardArray[2] && marker === boardArray[5] && marker === boardArray[8] ||
		marker === boardArray[0] && marker === boardArray[4] && marker === boardArray[8] ||//diagonal
		marker === boardArray[2] && marker === boardArray[4] && marker === boardArray[6] )
    {
			win = true;
			winner = marker;
			console.log("winner is " + marker);
      // $('.overlay').show (console.log("winner is " + marker));
      // $('.overlay').show("winner is " + marker);
			// console.log("over is" + " "+ over);
			// console.log("winner is " +marker);
			showMessage('The Winner is ' + winner );
			blockPlay();
		}
  if (over1 === true) {
		// blockPlay();
		}
			// blockPlay();
  };

//Draw conditions
let checkForDraw = function(){
	let draw = false;
	if(turnTracker === 9)
  {
		over1 = true;
		// blockPlay();
		// console.log("tie is" + " " + over1);
		showMessage('It is a tie!');
		// blockPlay();
	}
  else {
		draw = false;
	}
	// console.log("over should be true");
	//  blockPlay();
	 return draw;

};

const onClickTile = function(event) {
event.preventDefault();
let tile = $(event.target);
let id = tile.data('id');
if ($(this).html() === '') {
  if (turnTracker % 2 === 0) {
    marker = "X";
    $(this).html('X');
    boardArray[id] = 'X';
    turnTracker++; //will become odd
    checkForWin ();
    checkForDraw ();
  }
  else {
    marker = "O";
    $(this).html ('O');
    boardArray[id] = 'O';
    turnTracker++;
		checkForWin ();
    checkForDraw ();
    // updateGame.boardArray();
    // $('.overlay').show();
    // // $('.overlay').hide();
  }
  // console.log(boardArray);
}
	else {
	  showMessage('Not empty!'); //in the future add a message;
	}
};


const addHandlers = () => {
  $('.tile').on('click', onClickTile);
	$('#new-game').on('submit', onNewGame);
	// $('#historyGames').on('submit', onHistoryGames);
	$('#getGameById').on('submit', onGetGameById);
	// $('#joinGame').on('submit', onJoinGame);
  // $('#updateGame').on('submit', onUpdateGame);
	$('.reset-board').on('click', resetBoard);
};


module.exports = {
  onClickTile,
  turnTracker,
  marker,
  index,
  over1,
  currentPlayer,
  boardArray,
  addHandlers,
	// displayWinner,
  // updateGame,
};
