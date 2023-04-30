// https://school.programmers.co.kr/learn/courses/30/lessons/12932?language=javascript

function solution(n) {
  let arr = [...String(n)];
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    const j = arr.length - 1 - i;

    answer.push(Number(arr[j]));
  }

  return answer;
}

console.log(solution(12345)); // [5,4,3,2,1]
