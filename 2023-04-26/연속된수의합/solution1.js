// https://school.programmers.co.kr/learn/courses/30/lessons/120923?language=javascript

function solution(num, total) {
  let answer = [];
  let start = 0;
  for (let i = -num; i <= num; i++) {
    if (num * i + (num * (num - 1)) / 2 === total) {
      start = i;
    }
  }

  for (let i = -1000; i <= 1000; i++) {
    answer.push(i);
  }

  return answer;
}
console.log(solution(3, 12)); // [3, 4, 5]
console.log(solution(5, 15)); // [1, 2, 3, 4, 5]
console.log(solution(4, 14)); // [2, 3, 4, 5]
console.log(solution(5, 5)); // [-1, 0, 1, 2, 3]

//범위 설정이 헷갈림 ㅠ
