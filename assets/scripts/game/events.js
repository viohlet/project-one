'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');

// const onGetGameById = function (event) {
// 	event.preventDefault();
// 	let data = getFormFields(event.target);
// 	console.log(data);
// 	api.getGameById(data)
// 		.done(ui.success)
// 	  .fail(ui.failure);
// };

const onIndexGames = function (event) {
  event.preventDefault();
  api.indexGames()
    .done(ui.onIndexGamesSuccess)
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

const hideBoard = function () {
  $('.board').css('display', 'none');
};

const resumePlay = function(){
  $('.tile').on('click', onClickTile);
};


const clearBoard = function (){
  $('.tile').empty();
  marker = '';
  boardArray = ['','','','','','','','','',];
  turnTracker = 0;
  over1 = false;
	resumePlay();
	hideBoard();
};

// const hideLogInsButton = function () {
//   $('.hiscreen').css('display', 'none');
//   // $('.ingresa').css('display', 'none');
// 	// $('.register').css('display', 'none');
// };

const onNewGame = function (event) {
  event.preventDefault();
	let data = getFormFields(event.target);
	// console.log();
  api.newGame(data)
	  .done(ui.newGameSuccess)
	  .fail(ui.failure);
	clearBoard();
	// hideLogInsButton();
};



// Win Conditions
let checkForWin = function () {
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
			winner = marker;
			over1 = true;
			// console.log("winner is " + marker);

			showMessage('The Winner is ' + winner );
			blockPlay();
		}
  };

//Draw conditions
let checkForDraw = function(){
	let draw = false;
	if(turnTracker === 9)
  {
		over1 = true;
		// console.log("tie is" + " " + over1);
		showMessage('It is a tie!');
		blockPlay();
	}
  else {
		draw = false;
	}
	// console.log("over should be true");
	 return draw;

};

const onClickTile = function(event) {
	event.preventDefault();
	// let tile = $(this).attr('data-id');
	let tile = $(event.target);
	let id = tile.data('id');
	// let index = $(this).data('index');

	if ($(this).html() === '') {
	  if (turnTracker % 2 === 0) {
	    marker = "X";
	    $(this).html('X');
	    boardArray[id] = 'X';
	    turnTracker++; //will become odd
			api.updateGame(id, marker, over1);
	    checkForWin ();
	    checkForDraw ();
			// console.log(this);
	  	}
	  else {
	    marker = "O";
	    $(this).html ('O');
	    boardArray[id] = 'O';
	    turnTracker++;
			// api.updateGame(index, $(this).text(), over1);
			api.updateGame(id, marker, over1);
			checkForWin ();
	    checkForDraw ();
			// console.log(this);
	  	}
		}
		else {
		  // showMessage('Not empty!');
		}
};


const addHandlers = () => {
  $('.tile').on('click', onClickTile);
	$('#new-game').on('submit', onNewGame);
	// $('#getGameById').on('submit', onGetGameById);
	$('#index-games').on('submit', onIndexGames);
	$('.new-game').on('click', clearBoard);
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
	onNewGame,
};
