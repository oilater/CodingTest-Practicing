// https://school.programmers.co.kr/learn/courses/30/lessons/120887?language=javascript

function solution(a, b, k) {
  let count = 0;
  let arr = [];
  for (let i = a; i < b + 1; i++) {
    arr.push(i);
  }
  let strArr = arr.join("");

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] === k.toString()) {
      count++;
    }
  }
  return count;
}

console.log(solution(1, 13, 1)); //	6
console.log(solution(10, 50, 5)); // 5
console.log(solution(3, 10, 2)); // 0
