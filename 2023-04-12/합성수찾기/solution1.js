// https://school.programmers.co.kr/learn/courses/30/lessons/120846?language=javascript

function solution(n) {
  let answer = 0;
  let arr = [];
  let semiArr = [];
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        semiArr.push(j);
      }
    }
    arr = semiArr;
    semiArr = [];

    if (arr.length > 2) {
      answer++;
    }
  }

  return answer;
}

console.log(solution(10)); // 5
console.log(solution(15)); // 8

// 풀긴 풀었는데 시원하지가 않다..
// 소수를 구해서 n 개수에서 빼는 법
// 더 간단한 풀이 찾기
