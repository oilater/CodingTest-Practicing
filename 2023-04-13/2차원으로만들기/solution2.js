// https://school.programmers.co.kr/learn/courses/30/lessons/120842?language=javascript

function solution(num_list, n) {
  let answer = [];
  let a = [];

  for (let i = 0; i < num_list.length / n; i++) {
    a = [];
    for (let j = n * i; j < n * i + n; j++) {
      a.push(num_list[j]);
    }
    answer[i] = a;
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2)); // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log(solution([100, 95, 2, 4, 5, 6, 18, 33, 948], 3)); // [[100, 95, 2], [4, 5, 6], [18, 33, 948]]
