// https://school.programmers.co.kr/learn/courses/30/lessons/120893?language=javascript

function solution(my_string) {
  let answer = "";
  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] === my_string[i].toUpperCase()) {
      answer += my_string[i].toLowerCase();
    } else {
      answer += my_string[i].toUpperCase();
    }
  }

  return answer;
}

console.log(solution("cccCCC")); // "CCCccc"
console.log(solution("abCdEfghIJ")); // "ABcDeFGHij"
