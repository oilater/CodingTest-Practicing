// https://school.programmers.co.kr/learn/courses/30/lessons/142086?language=javascript

function solution(s) {
  let answer = [];

  for (let i = 0; i < s.length; i++) {
    !s.substring(0, i).includes(s[i])
      ? answer.push("-1")
      : answer.push(i - s.substring(0, i).lastIndexOf(s[i]));
  }

  return answer.map((value) => Number(value));
}

console.log(solution("banana")); //	[-1, -1, -1, 2, 2, 2]
console.log(solution("foobar")); // [-1, -1, 1, -1, -1, -1]
