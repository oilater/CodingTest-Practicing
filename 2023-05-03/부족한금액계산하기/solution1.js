// https://school.programmers.co.kr/learn/courses/30/lessons/82612?language=javascript

function solution(price, money, count) {
  let sum = 0;
  for (let i = 1; i <= count; i++) {
    sum += price * i;
  }

  return sum > money ? sum - money : 0;
}

console.log(solution(3, 20, 4)); // 10
