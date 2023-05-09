// https://school.programmers.co.kr/learn/courses/30/lessons/140108?language=javascript

function solution(s) {
  const arr = [...s];
  const stack = [];
  let answer = 0;
  let index = 0;

  while (arr[0] !== arr[1]) {
    if (arr[0] !== arr[1]) {
      answer++;
      arr.splice(0, 2);
    }
  }

  while (arr[0] === arr[1]) {
    
  }
  return answer;
}

console.log(solution("banana")); // 3
console.log(solution("abracadabra")); // 6
console.log(solution("aaabbaccccabba")); // 3
