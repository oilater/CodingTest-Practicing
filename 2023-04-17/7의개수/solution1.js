// https://school.programmers.co.kr/learn/courses/30/lessons/120912?language=javascript

function solution(array) {
  let count = 0;
  const s = array.join("");
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "7") {
      count++;
    }
  }

  return count;
}

console.log(solution([7, 77, 17])); // 4
console.log(solution([10, 29])); // 0
