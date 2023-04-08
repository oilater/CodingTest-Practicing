// https://school.programmers.co.kr/learn/courses/30/lessons/120811?language=javascript

function solution(array) {
  let answer = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let a = array[j];
        array[j] = array[j + 1];
        array[j + 1] = a;
      }
    }
  }

  console.log(array);

  answer = array[(array.length - 1) / 2];
  return answer;
}

console.log(solution([1, 2, 7, 10, 11])); // 7
console.log(solution([9, -1, 0])); // 0
console.log(solution([9, 0, -1])); // 0

// 배열을 정렬해야한다
