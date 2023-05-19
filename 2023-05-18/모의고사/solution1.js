// https://school.programmers.co.kr/learn/courses/30/lessons/42840?language=javascript

function checkAnswer(arr, answers) {
  let count = 0;
  answers.forEach((v, i) => {
    if (v === arr[i % arr.length]) {
      count++;
    }
  });
  return count;
}

function solution(answers) {
  const s1 = [1, 2, 3, 4, 5];
  const s2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const s3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const temp = [];
  const answer = [];

  const [score1, score2, score3] = [
    checkAnswer(s1, answers),
    checkAnswer(s2, answers),
    checkAnswer(s3, answers),
  ];

  temp.push(score1, score2, score3);

  temp.forEach((value, index) => {
    if (value === Math.max(...temp)) {
      answer.push(index + 1);
    }
  });

  return answer;
}

console.log(solution([1, 2, 3, 4, 5])); // [1]
console.log(solution([1, 3, 2, 4, 2])); // [1,2,3]
