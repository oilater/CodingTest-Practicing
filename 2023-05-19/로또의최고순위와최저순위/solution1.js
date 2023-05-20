// https://school.programmers.co.kr/learn/courses/30/lessons/77484?language=javascript

function solution(lottos, win_nums) {
  const answer = [];

  let [worst, best] = [7, 1];
  let count = 0;
  for (const item of lottos) {
    if (win_nums.includes(item)) {
      worst -= 1;
      count += 1;
    }
  }
  if (worst === 7) worst = 6;

  for (const item of lottos) {
    if (item === 0) {
      count += 1;
    }
  }

  return count === 0 ? [6 - count, worst] : [7 - count, worst];
}

console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])); // [3, 5]
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25])); // [1, 6]
console.log(solution([45, 4, 35, 20, 3, 9], [20, 9, 3, 45, 4, 35])); // [1, 1]
