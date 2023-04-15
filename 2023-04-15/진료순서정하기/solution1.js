// https://school.programmers.co.kr/learn/courses/30/lessons/120835?language=javascript

function solution(emergency) {
  const answer = [];
  let count = 1;

  for (let i = 0; i < emergency.length; i++) {
    answer.push(count);
  }

  for (let i = 0; i < emergency.length; i++) {
    for (let j = 0; j < emergency.length; j++) {
      if (emergency[i] < emergency[j]) {
        answer[i] = ++count;
      }
    }
    count = 1;
  }

  return answer;
}

console.log(solution([3, 76, 24])); // [3, 1, 2]
console.log(solution([1, 2, 3, 4, 5, 6, 7])); // [7, 6, 5, 4, 3, 2, 1]
console.log(solution([30, 10, 23, 6, 100])); //	[2, 4, 3, 5, 1]
