// https://school.programmers.co.kr/learn/courses/30/lessons/120840?language=javascript

function solution(balls, share) {
  let k = 1;
  let l = 1;
  let m = 1;
  for (let i = 1; i < balls + 1; i++) {
    k *= i;
  }

  for (let i = 1; i < share + 1; i++) {
    l *= i;
  }

  for (let i = 1; i < balls - share + 1; i++) {
    m *= i;
  }

  return Math.round(k / (l * m));
}

console.log(solution(3, 2)); // 3
console.log(solution(5, 3)); //	10
console.log(solution(6, 2)); //	10
