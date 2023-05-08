// https://school.programmers.co.kr/learn/courses/30/lessons/131128?language=javascript

function solution(X, Y) {
  X = [...X].sort().reverse();
  Y = [...Y].sort().reverse();
  let answer = "";
  let count = 0;
  for (const x of X) {
    if (Y.includes(x)) {
      count++;
      answer += Y[Y.indexOf(x)];
      Y.splice(Y.indexOf(x), 1);
    }
  }
  if (count === 0) {
    return "-1";
  }

  return String(Number(answer));
}

console.log(solution("100", "2345")); // "-1"
console.log(solution("100", "203045")); // "0"
console.log(solution("100", "123450")); // "10"
console.log(solution("12321", "42531")); // "321"
console.log(solution("5525", "1255")); // "552"
