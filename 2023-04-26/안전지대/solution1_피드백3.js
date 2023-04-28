// https://school.programmers.co.kr/learn/courses/30/lessons/120866?language=javascript

function solution(board) {
  // 지뢰를 찾는다
  // 지뢰 주변을 위험지대로 바꿔야 한다
  // 안전지대의 갯수를 센다

  const mine = [];

  //특수한 상황 처리
  if (board.length === 1) {
    if (board[0][0] === 1) return 0;
    else return 1;
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        mine.push([i, j]);
      }
    }
  }
  console.log(mine);

  for (let i = 0; i < mine.length; i++) {
    let [x, y] = mine[i];

    if (x === 0 && y - 1 < 0) {
      board[x][y + 1] = 2;
      board[x + 1][y] = 2;
      board[x + 1][y + 1] = 2;
      continue;
    }

    if (x === 0 && y === board.length - 1) {
      board[x][y - 1] = 2;
      board[x + 1][y - 1] = 2;
      board[x + 1][y] = 2;
      continue;
    }

    if (x === 0 && y !== 0 && y !== board.length - 1) {
      board[x][y - 1] = 2;
      board[x][y + 1] = 2;
      board[x + 1][y - 1] = 2;
      board[x + 1][y] = 2;
      board[x + 1][y + 1] = 2;
      continue;
    }

    if (x === board.length - 1 && y - 1 < 0) {
      board[x - 1][y] = 2;
      board[x - 1][y + 1] = 2;
      board[x][y + 1] = 2;
      continue;
    }

    if (x === board.length - 1 && y === board.length - 1) {
      board[x - 1][y - 1] = 2;
      board[x - 1][y] = 2;
      board[x][y - 1] = 2;
      continue;
    }

    if (x === board.length - 1 && y !== 0 && y !== board.length - 1) {
      board[x - 1][y - 1] = 2;
      board[x - 1][y] = 2;
      board[x - 1][y + 1] = 2;
      board[x][y - 1] = 2;
      board[x][y + 1] = 2;
      continue;
    }

    if (y === 0 && x - 1 !== undefined && x !== board.length - 1) {
      board[x - 1][y] = 2;
      board[x - 1][y + 1] = 2;
      board[x][y + 1] = 2;
      board[x + 1][y] = 2;
      board[x + 1][y + 1] = 2;
      continue;
    }

    if (
      y === board.length - 1 &&
      x - 1 !== undefined &&
      x !== board.length - 1
    ) {
      board[x - 1][y - 1] = 2;
      board[x - 1][y] = 2;
      board[x][y - 1] = 2;
      board[x + 1][y - 1] = 2;
      board[x + 1][y] = 2;
      continue;
    }

    board[x - 1][y - 1] = 2;
    board[x][y - 1] = 2;
    board[x + 1][y - 1] = 2;

    board[x - 1][y + 1] = 2;
    board[x][y + 1] = 2;
    board[x + 1][y + 1] = 2;

    board[x - 1][y] = 2;
    board[x + 1][y] = 2;
  }

  let result = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 0) {
        result += 1;
      }
    }
  }

  return result;
}

console.log(
  solution([
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ])
); // 16

console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0],
  ])
); // 13

console.log(
  solution([
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
  ])
); // 0
