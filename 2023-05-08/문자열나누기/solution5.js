// https://school.programmers.co.kr/learn/courses/30/lessons/140108?language=javascript

// 정답

function solution(s) {
  const arr = [...s];
  let str = "";
  let answer = 0;
  let count1 = 0;
  let count2 = 0;

  for (const elem of arr) {
    if (count1 === 0 && count2 === 0) {
      str = elem;
    }
    if (str === elem) {
      count1++;
    } else {
      count2++;
    }

    if (count1 === count2) {
      answer++;
      count1 = 0;
      count2 = 0;
    }
  }

  if (count1 !== 0 || count2 !== 0) {
    answer++;
  }

  return answer;
}

console.log(solution("banana")); // 3
console.log(solution("abracadabra")); // 6
console.log(solution("aaabbaccccabba")); // 3
