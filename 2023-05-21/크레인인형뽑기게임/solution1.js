// https://school.programmers.co.kr/learn/courses/30/lessons/64061?language=javascript

function solution(board, moves) {
  const newBoard = [];
  for (let i = 0; i < board.length; i++) {
    const temp = [];
    for (const item of board) {
      if (item[i] !== 0) {
        temp.push(item[i]);
      }
    }
    newBoard.push(temp);
  }

  let stack = [];
  let answer = 0;

  for (let i = 0; i < moves.length; i++) {
    if (newBoard[moves[i] - 1][0] === undefined) continue;
    const bye = newBoard[moves[i] - 1].shift();
    stack.push(bye);

    for (let i = 0; i < stack.length; i++) {
      if (stack[i] === stack[i - 1]) {
        stack.pop();
        stack.pop();
        answer += 2;
      }
    }
  }

  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
); //4
