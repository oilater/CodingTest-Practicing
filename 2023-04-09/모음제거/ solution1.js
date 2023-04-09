// https://school.programmers.co.kr/learn/courses/30/lessons/120849?language=javascript

function solution(my_string) {
  let answer = "";
  let strArr = [...my_string];
  let arr = ["i", "e", "a", "o", "u"];

  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (strArr[i] === arr[j]) {
        strArr.splice(i, 1, "");
      }
    }
  }
  answer = strArr.join("");
  return answer;
}

console.log(solution("bus")); // "bs"
console.log(solution("nice to meet you")); // "nc t mt y"
