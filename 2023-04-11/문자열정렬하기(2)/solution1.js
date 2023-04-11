// https://school.programmers.co.kr/learn/courses/30/lessons/120911?language=javascript

function solution(my_string) {
  let answer = "";
  let prev = [];
  let myString = my_string.toLowerCase();
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  const alphaArr = alpha.split("");
  let arr = alpha.split("");

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < myString.length; j++) {
      if (arr[i] === myString[j]) {
        prev.push(myString[j]);
      }
    }
  }

  answer = prev.join("");

  return answer;
}

console.log(solution("Bcad")); // "abcd"
console.log(solution("heLLo")); // "ehllo"
console.log(solution("Python")); //	"hnopty"
