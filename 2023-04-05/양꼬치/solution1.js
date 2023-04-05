// https://school.programmers.co.kr/learn/courses/30/lessons/120830?language=javascript

function solution(n, k) {
  let answer = 0;
  let gocchiPrice = 12000 * n;
  let bevPrice = 2000 * k;
  let ten = 0;

  for (let i = 1; i < 100; i++) {
    switch (parseInt(n / 10)) {
      case i:
        k -= i;
        break;
    }
  }
  
  answer = gocchiPrice + bevPrice;
  return answer;
}

console.log(solution(10, 3)); // 124,000
console.log(solution(64, 6)); // 768,000
