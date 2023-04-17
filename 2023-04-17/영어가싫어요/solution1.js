// https://school.programmers.co.kr/learn/courses/30/lessons/120894?language=javascript

function solution(numbers) {
  let temp = "";
  const arr = numbers.split("");
  let answer = "";
  const numArr = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < arr.length; i++) {
    temp += arr[i];

    for (let j = 0; j < numArr.length; j++) {
      if (temp === numArr[j]) {
        answer += String(j);
        temp = "";
      }
    }
  }

  return Number(answer);
}

console.log(solution("onetwothreefourfivesixseveneightnine")); // 123456789
console.log(solution("onefourzerosixseven")); // 14067
