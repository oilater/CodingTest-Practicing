// https://school.programmers.co.kr/learn/courses/30/lessons/120811?language=javascript

function solution(array) {
  let answer = 0;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      let temp = array[i + 1];
      array[i + 1] = array[i];
      array[i] = temp;
    }
  }

  answer = array[(array.length - 1) / 2];
  return answer;
}

console.log(solution([1, 2, 7, 10, 11])); // 7
console.log(solution([9, -1, 0])); // 0
