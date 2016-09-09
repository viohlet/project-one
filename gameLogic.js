'use strict';


let symbol = "X";

let markbox(cell) {
  if (cell.value === "") {
      cell.value = symbol;
      symbol = (symbol === "X") ? "O" : "X";
    }

  if (winning_condition()) {
      alert("You win!");
      return;
    }
  else if (!winning_condition()) {
      alert("You lose!");
    }
  else {
      alert("Draw!");
    }
}


function winning_condition() {
  	if (document.f1.b00.value === symbol && document.f1.b01.value === symbol && document.f1.b02.value === symbol)
			{return 'true';
			}
    else if (document.f1.b10.value === symbol && document.f1.b11.value === symbol && document.f1.b12.value === symbol)
			{return 'true';
			}
    else if (document.f1.b20.value === symbol && document.f1.b21.value === symbol && document.f1.b22.value === symbol)
			{return 'true';
			}
    else if (document.f1.b00.value === symbol && document.f1.b10.value === symbol && document.f1.b20.value === symbol)
			{return 'true';
			}
    else if (document.f1.b01.value === symbol && document.f1.b11.value === symbol && document.f1.b21.value === symbol)
			{return 'true';
			}
    else if (document.f1.b02.value === symbol && document.f1.b12.value === symbol && document.f1.b22.value === symbol)
			{return 'true';
			}
    else if (document.f1.b00.value === symbol && document.f1.b11.value === symbol && document.f1.b22.value === symbol)
			{return 'true';
			}
    else if (document.f1.b02.value === symbol && document.f1.b11.value === symbol && document.f1.b20.value === symbol)
			{return 'true';
			}
}

function clearBtn() {
    status = "X";
    document.f1.b00.value = "   ";
    document.f1.b01.value = "   ";
    document.f1.b02.value = "   ";
    document.f1.b10.value = "   ";
    document.f1.b11.value = "   ";
    document.f1.b12.value = "   ";
    document.f1.b20.value = "   ";
    document.f1.b21.value = "   ";
    document.f1.b22.value = "   ";
}


module.exports = {
		winning_condition,
		clearBtn,
    markBox,
  // setCellValue,
  // addToYourTurn,
};


//
// 'use strict';
//
// // winner might be to check whether X or O
// const getWinner = function() {
//   if (winnerIsX()) {
//     return 'x';
//   }
//   if (winnerIsO()) {
//     return 'o';
//   }
//   return null;
// };
//
// const winnerIsX = function() {
//   return winsRowX() || winsColumnX() || winsDiagonalX();
// };
//
// const winnerIsO = function() {
//   return winsRowX() || winsColumnX() || winsDiagonalX();
// };
//
// const winsRowX = function() {
//   return allThreeX(cellValue('a'), cellValue('b'), cellValue('c')) ||
//           allThreeX(cellValue('d'), cellValue('e'), cellValue('f')) ||
//           allThreeX(cellValue('g'), cellValue('h'), cellValue('i'));
// }
//
// const winsColumnX = function() {
//   return allThreeX(cells('a'), cells('d'), cells('g')) ||
//          allThreeX(cells('b'), cells('e'), cells('h')) ||
//          allThreeX(cells('c'), cells('f'), cells('i'));
// };
//
//
// const winsDiagonalX = function() {
//   return allThreeX(cells('a'), cells('e'), cells('i')) ||
//          allThreeX(cells('c'), cells('e'), cells('g'));
// }
//
// const allThreeX = function(cellOne, cellTwo, cellThree) {
// };
// };
//
// const allThreeX = function(cellOne, cellTwo, cellThree) {
//   return (cellOne === 'x') && (cellTwo === 'x') && (cellThree === 'x');
// }
//
// var allThree = function(player, cellOne, cellTwo, cellThree) {
//   return (cellOne === player) && (cellTwo === player) && (cellThree === player);
// }
//
//
// module.exports = {
//   getWinner,
//   winnerIsO,
//   winnerIsX,
//   makeMove,
//   // setCellValue,
//   // addToYourTurn,
// };
