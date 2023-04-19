// https://school.programmers.co.kr/learn/courses/30/lessons/120861?language=javascript

function solution(keyinput, board) {
  const maxWidth = (board[0] - 1) / 2;
  const minWidth = -(board[0] - 1) / 2;
  const maxHeight = (board[1] - 1) / 2;
  const minHeight = -(board[1] - 1) / 2;
  const answer = [0, 0];

  for (let i = 0; i < keyinput.length; i++) {
    if (keyinput[i] === "left") {
      answer[0] -= 1;
    }

    if (keyinput[i] === "right") {
      answer[0] += 1;
    }

    if (keyinput[i] === "up") {
      answer[1] += 1;
    }

    if (keyinput[i] === "down") {
      answer[1] -= 1;
    }

    if (answer[0] > maxWidth) {
      answer[0] = maxWidth;
    }
    if (answer[0] < minWidth) {
      answer[0] = minWidth;
    }
    if (answer[1] > maxHeight) {
      answer[1] = maxHeight;
    }
    if (answer[1] < minHeight) {
      answer[1] = minHeight;
    }
  }

  return answer;
}

console.log(solution(["left", "right", "up", "right", "right"], [11, 11])); // [2, 1]
console.log(solution(["down", "down", "down", "down", "down"], [7, 9])); // [0, -4]
console.log(solution(["up", "left", "right", "down", "down"], [3, 5])); // [0, -4]

//아래 조건문을 for 문 바깥에 쓰면 안되는 건가?
