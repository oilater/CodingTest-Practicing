// https://school.programmers.co.kr/learn/courses/30/lessons/120886?language=javascript

function solution(before, after) {
  let answer = 0;

  return before.split("").sort().join("") === after.split("").sort().join("")
    ? 1
    : 0;
}

console.log(solution("olleh", "hello")); //	1
console.log(solution("allpe", "apple")); // 0

/* 
프로그래머스 다른 사람의 풀이,, sort 생각을 왜 못했을까
split 은 문자열을 배열로 만들어준다!!! 기억하기
join은 배열을 다시 문자열로 합치는 거다!!
*/
