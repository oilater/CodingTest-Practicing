// https://school.programmers.co.kr/learn/courses/30/lessons/120854?language=javascript

function solution(strlist) {
  var answer = [];
  for (let i = 0; i < strlist.length; i++) {
    answer[i] = strlist[i].length;
  }

  return answer;
}

console.log(solution(["We", "are", "the", "world!"])); //[2, 3, 3, 6]
console.log(solution(["I", "Love", "Programmers."])); //[1, 4, 12];

//map으로는 어떻게 풀지?
