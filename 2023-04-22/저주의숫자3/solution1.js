// https://school.programmers.co.kr/learn/courses/30/lessons/120871?language=javascript

function solution(n) {
  const numbers = [];

  for (let i = 1; i <= 500; i++) {
    if (i % 3 !== 0 && String(i).indexOf("3") === -1) {
      numbers.push(i);
    }
  }

  return numbers[n - 1];
}

console.log(solution(15)); // 25
console.log(solution(40)); // 76

//범위 설정을 어떻게 해야 할까..
