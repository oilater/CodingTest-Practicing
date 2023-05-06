// https://school.programmers.co.kr/learn/courses/30/lessons/132267?language=javascript

function solution(a, b, n) {
  var answer = 0;
  let temp = n;
  let rest = 0;

  while (temp >= a) {
    rest = Math.trunc(temp % a);
    temp = Math.trunc(temp / a) * b;

    answer += temp;
    temp += rest;
  }

  return answer;
}

console.log(solution(2, 1, 20)); //	19
console.log(solution(3, 1, 20)); //	9
