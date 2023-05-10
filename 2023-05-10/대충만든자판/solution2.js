// https://school.programmers.co.kr/learn/courses/30/lessons/160586?language=javascript

function solution(keymap, targets) {

  function findT(str) {
    if(targets.includes(str)) {
      
    }
  }

  const answer = [];
  for (let i = 0; i < keymap.length; i++) {
    for (let j = 0; j < keymap[i].length; j++) {
      count += findT(keymap[i][j]);
    }
  }

  return answer;
}

console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"])); // [9, 4]
console.log(solution(["AA"], ["B"])); // [-1]
console.log(solution(["AGZ", "BSSS"], ["ASA", "BGZ"])); // [4, 6]
console.log(solution(["AAA", "BA"], ["ABA"])); // [3]
