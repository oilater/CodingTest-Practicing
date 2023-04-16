// https://school.programmers.co.kr/learn/courses/30/lessons/120885?language=javascript

function solution(bin1, bin2) {
  const answer = "";
  let n1 = 0;
  let n2 = 0;
  let num = 0;
  let maxNum = 0;
  let count = 0;
  const arr = [];

  // 10진수로 변환
  for (let i = 0; i < bin1.length; i++) {
    const j = bin1.length - i - 1;
    n1 += bin1[j] * 2 ** i;
  }

  for (let i = 0; i < bin2.length; i++) {
    const j = bin2.length - i - 1;
    n2 += bin2[j] * 2 ** i;
  }

  num = n1 + n2;

  // 2진수 변환 준비
  for (let i = 0; i < num; i++) {
    if (2 ** i <= num) {
      maxNum = i;
    }
  }

  // 2진수로 변환
  for (let i = 0; i <= maxNum; i++) {
    const j = maxNum - i;

    if (2 ** j <= num) {
      count++;
      arr.push(count);
      num -= 2 ** j;
    } else if (2 ** j > num) {
      arr.push(count);
    }

    count = 0;
  }

  return arr.join("");
}

console.log(solution("10", "11")); // "101"
console.log(solution("1001", "1111")); // "11000"
