// https://school.programmers.co.kr/learn/courses/30/lessons/120821?language=javascript

//함수로 만들어보자
function reverse(arr) {
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    const j = arr.length - 1 - i;
    answer.push(arr[j]);
  }
  return answer;
}

function solution(num_list) {
  return reverse(num_list);
}

console.log(solution([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(solution([1, 1, 1, 1, 1, 2])); // [2, 1, 1, 1, 1, 1]
console.log(solution([1, 0, 1, 1, 1, 3, 5])); // [5, 3, 1, 1, 1, 0, 1]
