// https://school.programmers.co.kr/learn/courses/30/lessons/120866?language=javascript

function solution(board) {
    // 지뢰를 찾는다
    // 지뢰 주변을 위험지대로 바꿔야 한다
    // 안전지대의 갯수를 센다

    let mine = [];

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 1) {
                mine = [i, j];
            }
        }
    }
    console.log(mine);


    let [x, y] = mine;

    board[x-1][y-1] = 2;
    board[x][y-1] = 2;
    board[x+1][y-1] = 2;

    board[x-1][y+1] = 2;
    board[x][y+1] = 2;
    board[x+1][y+1] = 2;

    board[x-1][y] = 2;
    board[x+1][y] = 2;

    return board;
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
