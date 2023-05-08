// https://school.programmers.co.kr/learn/courses/30/lessons/161989?language=javascript

function fillZero(array, num, start) {
  for (let i = start; i < start + num; i++) {
    if (i < array.length) {
      array[i] = 0;
    }
  }
}

function solution(n, m, section) {
  let arr = new Array(n).fill(0);
  let answer = 0;

  for (let i = 0; i < section.length; i++) {
    arr[section[i] - 1] = -1;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      fillZero(arr, m, i);
      answer++;
    }
  }

  return answer;
}

console.log(solution(8, 4, [2, 3, 6])); //	2
console.log(solution(100, 4, [2, 3, 6, 97, 100])); // 3
console.log(solution(5, 4, [1, 3])); //	1
console.log(solution(4, 1, [1, 2, 3, 4])); // 4
console.log(solution(8, 2, [1, 2, 3, 4])); // 2

// 페인트
