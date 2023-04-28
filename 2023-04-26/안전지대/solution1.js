// https://school.programmers.co.kr/learn/courses/30/lessons/120866?language=javascript

function solution(board) {
  let answer = 0;
  const entire = board.length ** 2;
  let danger = 0;

  // 각 모서리에 지뢰가 있을 때 설정
  if (board[0][0] === 1) {
    board[0][0] = 2;
    board[0][1] = 2;
    board[1][0] = 2;
    board[1][1] = 2;
  }

  if (board[0][board.length - 1] === 1) {
    board[0][board.length - 2] = 2;
    board[1][board.length - 2] = 2;
    board[1][board.length - 1] = 2;
  }

  if (board[board.length - 1][0] === 1) {
    board[board.length - 2][0] = 2;
    board[board.length - 2][1] = 2;
    board[board.length - 1][1] = 2;
  }

  if (board[board.length - 1][board.length - 1]) {
    board[board.length - 2][board.length - 2] = 2;
    board[board.length - 2][board.length - 1] = 2;
    board[board.length - 1][board.length - 2] = 2;
  }

  // 변 설정
  for (let i = 1; i < board.length - 1; i++) {
    if (board[0][i] === 1) {
      board[0][i - 1] = 2;
      board[0][i + 1] = 2;
      board[1][i - 1] = 2;
      board[1][i] = 2;
      board[1][i + 1] = 2;
    }

    if (board[i][0] === 1) {
      board[i - 1][0] = 2;
      board[i - 1][1] = 2;
      board[i][1] = 2;
      board[i + 1][0] = 2;
      board[i + 1][1] = 2;
    }

    if (board[board.length - 1][i] === 1) {
      board[board.length - 1][i - 1] = 2;
      board[board.length - 1][i + 1] = 2;
      board[board.length - 2][i - 1] = 2;
      board[board.length - 2][i] = 2;
      board[board.length - 2][i + 1] = 2;
    }

    if (board[i][board.length - 1] === 1) {
      board[i - 1][board.length - 2] = 2;
      board[i - 1][board.length - 1] = 2;
      board[i][board.length - 2] = 2;
      board[i + 1][board.length - 2] = 2;
      board[i + 1][board.length - 1] = 2;
    }
  }

  for (let i = 1; i < board.length - 1; i++) {
    for (let j = 1; j < board.length - 1; j++) {
      if (board[i][j] === 1) {
        board[i - 1][j - 1] = 2;
        board[i - 1][j] = 2;
        board[i - 1][j + 1] = 2;
        board[i][j - 1] = 2;
        board[i][j + 1] = 2;
        board[i + 1][j - 1] = 2;
        board[i + 1][j] = 2;
        board[i + 1][j + 1] = 2;
      }
    }
  }
  return board;
}

console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 1],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ])
); // 16
// console.log(
//   solution([
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 1, 1, 0],
//     [0, 0, 0, 0, 0],
//   ])
// ); // 13
// console.log(
//   solution([
//     [1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1],
//     [1, 1, 1, 1, 1, 1],
//   ])
// ); // 0
