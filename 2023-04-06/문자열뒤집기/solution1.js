// https://school.programmers.co.kr/learn/courses/30/lessons/120822?language=javascript

function solution(my_string) {
  let answer = "";
  for (let i = my_string.length - 1; i >= 0; i--) {
    answer += my_string[i];
  }

  return answer;
}

console.log(solution("jaron")); // "noraj"
console.log(solution("bread")); //	"daerb"
