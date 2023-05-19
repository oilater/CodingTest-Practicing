// https://school.programmers.co.kr/learn/courses/30/lessons/42889?language=javascript

function solution(N, stages) {
  stages.sort((a, b) => a - b);

  const arr = [];
  for (let i = 1; i <= N; i++) {
    let count = 0;
    stages.forEach((value) => {
      if (value === i) {
        count++;
      }
    });
    arr.push(count);
  }

  const arr2 = [];
  let length = stages.length;

  for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i] / length);
    length -= arr[i];
  }

  const answer = [];
  arr2.forEach((value, index) => {
    answer.push([value, index + 1]);
  });

  const result = [];
  answer
    .sort((a, b) => b[0] - a[0])
    .forEach(([x, y]) => {
      result.push(y);
    });

  return result;
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3,4,2,1,5]
console.log(solution(4, [4, 4, 4, 4, 4])); // [4,1,2,3]
