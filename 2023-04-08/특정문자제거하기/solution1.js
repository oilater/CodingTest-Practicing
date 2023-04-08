// https://school.programmers.co.kr/learn/courses/30/lessons/120826?language=javascript

function solution(my_string, letter) {
  let answer = "";
  let arr = [];
  for (let i = 0; i < my_string.length; i++) {
    arr.push(my_string[i]);
  }

  for (let i = 0; i < my_string.length; i++) {
    if (arr[i] === letter) {
      arr.splice(i, 1);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    answer += arr[i];
  }

  return answer;
}
console.log(solution("abcdef", "f")); //	"abcde"
console.log(solution("BCBdbe", "B")); // "Cdbe"
