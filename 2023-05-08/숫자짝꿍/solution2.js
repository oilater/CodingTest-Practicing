// https://school.programmers.co.kr/learn/courses/30/lessons/131128?language=javascript

function solution(X, Y) {
  X = [...X].sort().reverse();
  Y = [...Y].sort().reverse();
  let answer = "";
  let arr = [];
  for (let i = 0; i < X.length; i++) {
    if (!arr.includes(X[i])) {
      arr.push(X[i]);
    }
  }

  let arrNum = [];
  for (let i = 0; i < arr.length; i++) {
    let xCount = 0;
    let yCount = 0;
    let sCount = 0;
    for (let j = 0; j < X.length; j++) {
      if (arr[i] === X[j]) {
        xCount++;
      }
    }

    for (let k = 0; k < Y.length; k++) {
      if (arr[i] === Y[k]) {
        yCount++;
      }
    }

    sCount = Math.min(xCount, yCount);
    arrNum.push(sCount);
  }

  let count = 0;
  for (const n of arrNum) {
    if (n === 0) {
      count++;
    }

    if (count === arrNum.length) {
      return "-1";
    }
  }

  for (let i = 0; i < arr.length; i++) {
    while (arrNum[i]) {
      answer += arr[i];
      arrNum[i]--;
    }
  }

  if (+answer === 0) return "0";

  return answer;
}

console.log(solution("100", "2345")); // "-1"
console.log(solution("100", "203045")); // "0"
console.log(solution("100", "123450")); // "10"
console.log(solution("12321", "42531")); // "321"
console.log(solution("5525", "1255")); // "552"
