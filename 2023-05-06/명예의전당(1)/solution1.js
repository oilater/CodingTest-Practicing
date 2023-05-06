// https://school.programmers.co.kr/learn/courses/30/lessons/138477?language=javascript

function solution(k, score) {
  let answer = [];
  let arr = [];
  let low = score[0];

  for (let i = 0; i < score.length; i++) {
    arr.push(score[i]);
    arr.sort((a, b) => a - b);

    if (arr.length <= k) {
      answer.push(arr[0]);
    } else {
      answer.push(arr[arr.length - k]);
    }
  }
  return answer;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200])); // [10, 10, 10, 20, 20, 100, 100]
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000])); // [0, 0, 0, 0, 20, 40, 70, 70, 150, 300]
