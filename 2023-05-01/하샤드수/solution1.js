// https://school.programmers.co.kr/learn/courses/30/lessons/12947?language=javascript

function solution(x) {
  const strX = String(x);
  let sum = 0;

  for (let i = 0; i < strX.length; i++) {
    sum += Number(strX[i]);
  }

  if (x % sum === 0) {
    return true;
  }

  return false;
}

console.log(solution(10)); // true
console.log(solution(12)); // true
console.log(solution(11)); // false
console.log(solution(13)); // false
