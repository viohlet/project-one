'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);

const api = require('./api');
const ui = require('./ui');

// const onUpdateGame = function onUpdateGame(marker, index, over1){   /// what do i do with you?
// 	event.preventDefault();
// 	api.updateGame(marker, index, over1)
//     .done(ui.updateGameSuccess)
//     .fail(ui.failure);
// };

const onHistoryGames = function (event) {
  event.preventDefault();
  api.historyGames()
    .done(ui.success)
    .fail(ui.failure);
};

const onJoinGame = function (event) {
  event.preventDefault();
  api.joinGame()
    .done(ui.joinGameSuccess)
    .fail(ui.failure);
  };

const onNewGame = function (event) {
  let data = getFormFields(this);
  event.newGame();
  api.signUp(data)
    .done(ui.success)
    .fail(ui.failure);
};

const onGetGameById = function (event) {
	event.preventDefault();
	let data = getFormFields(event.target);
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
			// $('.user-message').text('X IS VICTORIOUS!');

			console.log("winner is " + marker);
			// console.log("over is" + " "+ over);
			// console.log("winner is " +marker);
		}
      over1 = true;
  };

//Draw conditions
let checkForDraw = function(){
	let draw = false;
	if(turnTracker === 9)
  {
		draw = true;
		over1 = true;
		console.log("tie is" + " " + over1);
	}
  else {
		draw = false;
	}
	// console.log("over should be true");
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
		//updateGame.board
  }
  else {
    marker = "O";
    $(this).html ('O');
    boardArray[id] = 'O';
    turnTracker++;
		checkForWin ();
    checkForDraw ();
  }
  // console.log(boardArray);
}

else {
  console.log('Not empty!'); //in the future add a message;
}

};

const addHandlers = () => {
  $('.tile').on('click', onClickTile);
	$('#newGame').on('submit', onNewGame);
	$('#historyGames').on('submit', onHistoryGames);
	$('#getGameById').on('submit', onGetGameById);
	$('#joinGame').on('submit', onJoinGame);
  // $('#updateGame').on('submit', onUpdateGame);
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
};
