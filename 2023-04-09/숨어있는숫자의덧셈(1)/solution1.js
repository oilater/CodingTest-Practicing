// https://school.programmers.co.kr/learn/courses/30/lessons/120851?language=javascript

function solution(my_string) {
  var answer = 0;
  for (let i = 0; i < my_string.length; i++) {
    if (0 < my_string[i]) {
      answer += Number(my_string[i]);
    }
  }
  return answer;
}

console.log(solution("aAb1B2cC34oOp")); //	10
console.log(solution("1a2b3c4d123")); // 16

//typeof 쓰면 안되는건가?
