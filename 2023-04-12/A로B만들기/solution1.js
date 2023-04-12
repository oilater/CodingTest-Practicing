// https://school.programmers.co.kr/learn/courses/30/lessons/120886?language=javascript

function solution(before, after) {
  let answer = 0;

  let arrBefore = [...before];
  let arrAfter = [...after];
  for (let i = 0; i < arrAfter.length; i++) {
    for (let j = 0; j < arrBefore.length; j++) {
      if (arrBefore[j] === arrAfter[i]) {
        delete arrBefore[j];
        delete arrAfter[i];
      }
    }
  }

  if (arrBefore.toString() === arrAfter.toString()) answer = 1;
  return answer;
}

console.log(solution("olleh", "hello")); //	1
console.log(solution("allpe", "apple")); // 0
