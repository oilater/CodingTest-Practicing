// https://school.programmers.co.kr/learn/courses/30/lessons/120899?language=javascript
// 정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(array) {
  let answer = [];
  let count = 0;
  let counts = [];
  let index = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] > array[j]) {
        count++;
      }
    }
    counts.push(count);
    count = 0;
  }

  for (let i = 0; i < counts.length; i++) {
    if (counts[i] === counts.length - 1) {
      index = i;
    }
  }

  answer.push(array[index], index);

  return answer;
}

console.log(solution([1, 8, 3])); // [8, 1]
console.log(solution([9, 10, 11, 8])); // [11, 2];
