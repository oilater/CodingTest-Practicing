// https://school.programmers.co.kr/learn/courses/30/lessons/120888?language=javascript

function solution(my_string) {
  const arr = [...my_string];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1, "");
      }
    }
  }

  return arr.join("");
}

console.log(solution("people")); //	"peol"
console.log(solution("We are the world")); // "We arthwold"
