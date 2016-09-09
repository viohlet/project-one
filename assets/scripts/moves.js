'use strict';

const api = require('./auth/api');
const ui = require('./auth/ui');

let boardArray = [];
$(".tile").each(function() {
	boardArray.push($(this).attr("value"));
});

let counter = 0;
let over = false;

const patchGame = function(index, value, over1) {
  // console.log(api.app.game);
  api.update(index, value, over1)
    .done(ui.success)
    .fail(ui.failure);
};

//function to check if three cells hold a value of X
const allX = function(cellOne, cellTwo, cellThree) {
  return (cellOne === 'X') && (cellTwo === 'X') && (cellThree === 'X');
};

//function to check if three cells hold a value of O
const allO = function(cellOne, cellTwo, cellThree) {
  return (cellOne === 'O') && (cellTwo === 'O') && (cellThree === 'O');
};

//this function passes in the horizontal cells and passes them to the allX
//function to check if there is any row across of all X's
const xWinRows = function(){
  return allX(boardArray[0], boardArray[1], boardArray[2]) ||
         allX(boardArray[3], boardArray[4], boardArray[5]) ||
         allX(boardArray[6], boardArray[7], boardArray[8]);
};

//this function passes in the horizontal cells and passes them to the allO
//function to check if there is any row across of all O's
const oWinRows = function(){
  return allO(boardArray[0], boardArray[1], boardArray[2]) ||
         allO(boardArray[3], boardArray[4], boardArray[5]) ||
         allO(boardArray[6], boardArray[7], boardArray[8]);
};

//this function passes in the vertical cells and passes them to the allX
//function to check if there is any column of all X's
const xWinCol = function(){
  return allX(boardArray[0], boardArray[3], boardArray[6]) ||
         allX(boardArray[1], boardArray[4], boardArray[7]) ||
         allX(boardArray[2], boardArray[5], boardArray[8]);
};

//this function passes in the vertical cells and passes them to the allO
//function to check if there is any column of all O's
const oWinCol = function(){
  return allO(boardArray[0], boardArray[3], boardArray[6]) ||
         allO(boardArray[1], boardArray[4], boardArray[7]) ||
         allO(boardArray[2], boardArray[5], boardArray[8]);
};

//this function passes in the diagonal cells and passes them to the allX
//function to check if there is any diagonal of all X's
const xWinDiag = function(){
  return allX(boardArray[0], boardArray[4], boardArray[8]) ||
         allX(boardArray[6], boardArray[4], boardArray[2]);
};

//this function passes in the diagonal cells and passes them to the allO
//function to check if there is any diagonal of all O's
const oWinDiag = function(){
  return allO(boardArray[0], boardArray[4], boardArray[8]) ||
         allO(boardArray[6], boardArray[4], boardArray[2]);
};

//this function runs the previous functions to check if there are any X winning
//scenarios
const xWins = function(){
  return xWinRows() || xWinCol() || xWinDiag();
};

//this function runs the previous functions to check if there are any O winning
//scenarios
const oWins = function(){
  return oWinRows() || oWinCol() || oWinDiag();
};

//Every time a cell is clicked this function runs all other functions to check
//if there are any winning conditions for X or for O
const checkWinner = function(){
  if(xWins('X')) {

    $('.user-message').text('X WINS!');
    $('.game-tile').data('val', '1');
    boardArray = [];
    counter = 0;
    over = true;
  }else if(oWins('O')){

    $('.user-message').text('O WINS!');
    $('.game-tile').data('val', '1');
    boardArray = [];
    counter = 0;
    over = true;
  }else{
    if(counter === 9){
      counter = 0;
      boardArray = [];
      over = true;
    $('.user-message').text('it is a try...merp');
  }
    return null;
  }
  // update.update((counter - 1), $(this).text(), over);
};

//function that listens for a click on the game board and places alternating X
//and O
const attachGameLogic = () => {
  let tempIndex;
  $('.game-tile').on('click', function(){
  if($(this).data('val') === '0'){
    if(counter % 2 === 0){
      $(this).text('X');
      $(this).data('val', '1');
      counter++;
    }else{
      $(this).text('O');
      $(this).data('val', '1');
      counter++;
    }
  }
  tempIndex = $(this).data('index');
  boardArray[tempIndex] = $(this).text();
  checkWinner();
  let index = parseInt($(this).data('index'), 10);
  // console.log(index + $(this).text() + over);
  patchGame(index, $(this).text().toLowerCase(), over);
  });
};

module.exports = {
  attachGameLogic,
};







// 'use strict';
// const events = require('./events.js');
// let turnTracker = 0;
// let marker = ' ';
// let index;
// let over = false;
// let currentPlayer = ' ';
// let boardArray = [null, null, null, null, null, null, null, null, null];
//
// //Draw conditions'
// let checkForDraw = function(){
// 	let draw = false;
// 	if(turnTracker ===8){
// 		draw = true;
// 		over = true;
// 		console.log("over is" + " " + over);
// 	} else {
// 		draw = false;
// 	}
// 	console.log("over should be true");
// 	return draw;
// };
//
// //win conditions
//
// let checkForWin = function () {
// 	let win = false;
// 	console.log(boardArray);
// 	if(marker === boardArray[0] && marker === boardArray[1] && marker === boardArray[2] ||
// 		marker === boardArray[3] && marker === boardArray[4] && marker === boardArray[5] ||
// 		marker === boardArray[6] && marker === boardArray[7] && marker === boardArray[8] ||
// 		marker === boardArray[0] && marker === boardArray[3] && marker === boardArray[6] ||
// 		marker === boardArray[1] && marker === boardArray[4] && marker === boardArray[7] ||
// 		marker === boardArray[2] && marker === boardArray[5] && marker === boardArray[8] ||
// 		marker === boardArray[0] && marker === boardArray[4] && marker === boardArray[8] ||
// 		marker === boardArray[2] && marker === boardArray[4] && marker === boardArray[6] ){
// 			win = true;
// 			over = true;
// 			//console.log("over is" + " "+ over);
// 			// console.log("winner is " +marker);
// 		}
// 		return win;
// 	};
//
// 	//alternate players after
// 	const swapPlayer = function(){
// 		if(turnTracker % 2 === 0) {
// 			currentPlayer = "Player o";
// 			marker = "o";
// 		} else {
// 			currentPlayer = "Player x";
// 			marker =  "x";
// 		}
// 		turnTracker++;
// 	};
//
// 	const setPlay = function(){
// 		turnTracker = 0;
// 		over = false;
// 		currentPlayer = 'Player x';
// 		marker = 'x';
// 	};
//
// 	const idlePlay = function(){
// 		turnTracker = 0;
// 		over = false;
// 		currentPlayer = '';
// 		marker = ' ';
// 	};
//
// 	const setGame = function(){
// 		// empty board
// 		boardArray = [];
// 		boardArray[0] = null;
// 		boardArray[1] = null;
// 		boardArray[2] = null;
// 		boardArray[3] = null;
// 		boardArray[4] = null;
// 		boardArray[5] = null;
// 		boardArray[6] = null;
// 		boardArray[7] = null;
// 		boardArray[8] = null;
// 		// //clear the UI so so multiple games can happen
// 		$('.space').text('');
// 		$('h1').text('');
// 		$('.main').removeClass('off-clicks');
// 		setPlay();
// 	};
// 	//check to see if square is null
// 	const isSquareFree = function(index) {
// 		return (boardArray[index] === null);
// 	};
// 	//mark the square as  occupied
// 	const markSquare = function(index, domSquare) {
// 		$(domSquare).text(marker);
// 		// mark this square as taken on the board.
// 		boardArray[index] = marker;
// 	};
//
// 	$(() => {
//
// 		// init the game board
//
// 		setGame();
// 		$('.board').addClass('off-clicks');
// 		$('.new-game').on('click', setGame);
// 		$('#refresh-game').on('click', setGame);
// 		$('.board').on('click', 'div', function(){
// 			//push the values to the array that holds the gameboard
// 			// $('.board').removeClass('off-clicks');
// 			index = parseInt($(this).data('number'), 10);
// 			if (isSquareFree(index)) {
// 				$('.board').removeClass('off-clicks');
// 				//mark the square with x or o
// 				markSquare(index, this);
// 				let isWon = checkForWin();
// 				let doubleCheck = checkForDraw();
// 				//upate the game with each move
// 				//with PATCH AJAX request
// 				events.onUpdateGame(events, index, over);
// 				//checking if the game is won
// 				if(isWon){
// 					$('.board').addClass('off-clicks');
// 					//display winner on the screen
// 					$('h1').text("Winner is player" +" " +marker );
// 					//check for  a tie
// 				} else if(doubleCheck) {
// 					$('.board').addClass('off-clicks');
// 					over = true;
// 					//display that its a draw on the screen
// 					console.log('Its a draw');
// 					$('h1').text("It's a Cats Game!");
// 				} else {
// 					//     // game is still going
// 					swapPlayer();
// 				}
// 			}
// 		});
// 	});
// 	module.exports = {
// 		swapPlayer,
// 		checkForDraw,
// 		checkForWin,
// 		setGame,
// 		events,
// 		setPlay,
// 		idlePlay
// 	};
