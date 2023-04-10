// https://school.programmers.co.kr/learn/courses/30/lessons/120895?language=javascript

function solution(my_string, num1, num2) {
  let arr = [...my_string];
  let a = arr[num1];
  arr[num1] = arr[num2];
  arr[num2] = a;

  return arr.join("");
}

console.log(solution("hello", 1, 2)); // "hlelo"
console.log(solution("I love you", 3, 6)); // "I l veoyou"
