// https://school.programmers.co.kr/learn/courses/30/lessons/120818?language=javascript

function solution(price) {
  let answer = 0;

  if (price >= 500000) {
    answer = parseInt(price * 0.8);
  } else if (price >= 300000) {
    answer = parseInt(price * 0.9);
  } else if (price >= 100000) {
    answer = parseInt(price * 0.95);
  } else {
    answer = price;
  }

  return answer;
}

console.log(solution(150000)); // 142,500
console.log(solution(580000)); // 464,000
