// https://school.programmers.co.kr/learn/courses/30/lessons/120821?language=javascript

function solution(num_list) {
  var answer = [];

  for (let i = 0, j = num_list.length - 1; i < num_list.length; i++, j--) {
    answer[i] = num_list[j];
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]
console.log(solution([1, 1, 1, 1, 1, 2])); // [2, 1, 1, 1, 1, 1]
console.log(solution([1, 0, 1, 1, 1, 3, 5])); // [5, 3, 1, 1, 1, 0, 1]
