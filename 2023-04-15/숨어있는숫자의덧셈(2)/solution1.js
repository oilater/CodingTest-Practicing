// https://school.programmers.co.kr/learn/courses/30/lessons/120864?language=javascript

function solution(my_string) {
  const arr = [...my_string];
  const answer = 0;
  const eng = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let s = "";
  let sum = 0;
  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < eng.length; j++) {
      if (arr[i] === eng[j]) {
        arr[i] = " ";
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    s += arr[i];
  }

  resultArr = s.split(" ");

  for (let i = 0; i < resultArr.length; i++) {
    if (resultArr[i] < 1000) {
      sum += Number(resultArr[i]);
    }
  }
  return sum;
}

console.log(solution("aAb1B2cC34oOp")); //	37
console.log(solution("1a2b3c4d123Z")); // 133
