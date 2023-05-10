// https://school.programmers.co.kr/learn/courses/30/lessons/160586?language=javascript

function solution(keymap, targets) {
  function findKey(str) {
    let min = -1;
    for (let i = 0; i < keymap.length; i++) {
      if (keymap[i].includes(str)) {
        min = keymap[i].indexOf(str) + 1;
      }
    }

    for (let i = 0; i < keymap.length; i++) {
      if (keymap[i].includes(str)) {
        min = Math.min(min, keymap[i].indexOf(str) + 1);
      }
    }
    if (min !== -1) {
      return min;
    }
  }

  const answer = [];
  for (let i = 0; i < targets.length; i++) {
    let count = 0;
    for (let j = 0; j < targets[i].length; j++) {
      count += findKey(targets[i][j]);
    }

    if (isNaN(count)) {
      answer.push(-1);
    } else {
      answer.push(count);
    }
  }

  return answer;
}

console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"])); // [9, 4]
console.log(solution(["AA"], ["B"])); // [-1]
console.log(solution(["AGZ", "BSSS"], ["ASA", "BGZ"])); // [4, 6]
console.log(solution(["AAA", "BA"], ["ABA"])); // [3]
console.log(solution(["CCD", "AAA"], ["AB", "DDD"])); // [-1, 9]
