// https://school.programmers.co.kr/learn/courses/30/lessons/120884?language=javascript

function solution(chicken) {
  let answer = 0;
  let q = chicken;
  let r = 0;

  while (q >= 10) {
    r = q % 10;
    q = Math.trunc(q / 10);

    answer += q;
    q += r;
  }

  return answer;
}
console.log(solution(100)); // 11
console.log(solution(1081)); //	120
console.log(solution(1999)); //	222

// 다시 풀어보기 후우.. ㅠㅋ
