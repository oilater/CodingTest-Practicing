// https://school.programmers.co.kr/learn/courses/30/lessons/120826?language=javascript

function solution(my_string, letter) {
  let answer = "";
  const arr = [...my_string];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === letter) {
      arr.splice(i, 1, "");
    }
  }
  answer = arr.join("");
  return answer;
}
console.log(solution("abcdef", "f")); //	"abcde"
console.log(solution("BCBdbe", "B")); // "Cdbe"
