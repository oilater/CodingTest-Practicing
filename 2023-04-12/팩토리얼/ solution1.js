// https://school.programmers.co.kr/learn/courses/30/lessons/120848?language=javascript

function solution(n) {
  let answer = 0;
  let f = 1;

  for (let i = 1; i <= 10; i++) {
    f *= i;
    while (f <= n) {
      answer = i;
      break;
    }
  }

  return answer;
}

console.log(solution(3628800)); // 10
console.log(solution(7)); // 3

// 팩토리얼에 정수 k를 넣고 출력한 값이 n에 들어갈 수보다는 작은 최댓값이어야 한다.
