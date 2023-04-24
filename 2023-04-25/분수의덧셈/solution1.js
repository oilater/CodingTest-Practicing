// https://school.programmers.co.kr/learn/courses/30/lessons/120808?language=javascript

function solution(numer1, denom1, numer2, denom2) {
  let answer = [];
  let mom = 0;
  for (let i = Math.min(denom1, denom2); i <= denom1 * denom2; i++) {
    if (i % denom1 === 0 && i % denom2 === 0) {
      mom = i;
      break;
    }
  }

  numer1 *= mom / denom1;
  numer2 *= mom / denom2;
  let son = numer1 + numer2;

  let share = 0;
  for (let i = 1; i <= Math.min(mom, son); i++) {
    if (mom % i === 0 && son % i === 0) {
      share = i;
    }
  }

  mom /= share;
  son /= share;

  answer.push(son);
  answer.push(mom);

  return answer;
}

console.log(solution(1, 2, 3, 4)); // [5, 4]
console.log(solution(9, 2, 1, 3)); // [29, 6]
console.log(solution(5, 8, 1, 8)); // [29, 6]
