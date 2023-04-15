// https://school.programmers.co.kr/learn/courses/30/lessons/120842?language=javascript

function solution(num_list, n) {
  let answer = [];
  let length = num_list.length;

  for (let i = 0; i < length / n; i++) {
    answer.push(num_list.splice(0, n));
  }

  return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8], 2)); // [[1, 2], [3, 4], [5, 6], [7, 8]]
console.log(solution([100, 95, 2, 4, 5, 6, 18, 33, 948], 3)); // [[100, 95, 2], [4, 5, 6], [18, 33, 948]]

//왜 num_list.length + n 이 들어가야할까 범위에? 그냥 n 으로 나눠야 하는 거 아닌가?
