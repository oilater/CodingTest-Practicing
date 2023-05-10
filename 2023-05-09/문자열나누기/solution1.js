// https://school.programmers.co.kr/learn/courses/30/lessons/140108?language=javascript

// 문제 잘못 이해함

function solution(s) {
  let arr = [...s];
  let answer = 0;
  let prev = arr[0];
  let prevNum = 0;
  let arr2 = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== prev) {
      prev = arr[i];
      prevNum++;

      if (prevNum === 2) {
        answer++;
        prevNum = 0;
      }

      if(arr[i] === prev) {
         
      }

    }
  }

  if (s.length % 2 === 1) {
    answer++;
  }

  return answer;
}

console.log(solution("banana")); // 3
console.log(solution("abracadabra")); // 6
console.log(solution("aaabbaccccabba")); // 3