// https://school.programmers.co.kr/learn/courses/30/lessons/120907?language=javascript

function solution(quiz) {
  let answer = [];
  let result = 0;
  // quiz의 각 index 배열로 만들기
  for (let i = 0; i < quiz.length; i++) {
    quiz[i] = quiz[i].split(" ");
  }

  for (let i = 0; i < quiz.length; i++) {
    for (let j = 0; j < quiz[i].length; j++) {
      if (quiz[i][j] === "+") {
        result = Number(quiz[i][j - 1]) + Number(quiz[i][j + 1]);

        if (result === Number(quiz[i][quiz[i].length - 1])) {
          answer.push("O");
        } else {
          answer.push("X");
        }
      } else if (quiz[i][j] === "-") {
        result = Number(quiz[i][j - 1]) - Number(quiz[i][j + 1]);
        if (result === Number(quiz[i][quiz[i].length - 1])) {
          answer.push("O");
        } else {
          answer.push("X");
        }
      }
    }
  }

  return answer;
}

console.log(solution(["3 - 4 = -3", "5 + 6 = 11"])); // ["X", "O"]
console.log(
  solution(["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"])
); // ["O", "O", "X", "O"]
