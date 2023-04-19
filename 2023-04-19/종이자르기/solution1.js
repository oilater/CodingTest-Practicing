// https://school.programmers.co.kr/learn/courses/30/lessons/120922?language=javascript

function solution(M, N) {
  if (M === 1 && N === 1) {
    return 0;
  }
  answer = M - 1 + (N - 1) * M;

  return answer;
}

console.log(solution(2, 2)); //	3
console.log(solution(2, 5)); // 9
console.log(solution(1, 1)); //	0
