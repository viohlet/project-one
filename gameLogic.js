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
