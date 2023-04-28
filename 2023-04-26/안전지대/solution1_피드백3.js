// https://school.programmers.co.kr/learn/courses/30/lessons/120866?language=javascript

function solution(board) {
    // 지뢰를 찾는다
    // 지뢰 주변을 위험지대로 바꿔야 한다
    // 안전지대의 갯수를 센다

    const mine = [];

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 1) {
                mine.push([i, j]);
            }
        }
    }
    console.log(mine);

    for (let i = 0; i < mine.length; i++) {
        // let x = mine[i][0];
        // let y = mine[i][1];
        let [x, y] = mine[i];
        // console.log(x, y);

        if (x - 1 < 0) {
            continue;
        }

        if (x + 1 === board.length) {
            continue;
        }

        if (y - 1 < 0) {
            continue;
        }

        if (y + 1 === board.length) {
            continue;
        }

        board[x-1][y-1] = 2;
        board[x][y-1] = 2;
        board[x+1][y-1] = 2;

        board[x-1][y+1] = 2;
        board[x][y+1] = 2;
        board[x+1][y+1] = 2;

        board[x-1][y] = 2;
        board[x+1][y] = 2;
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
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
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
