// https://school.programmers.co.kr/learn/courses/30/lessons/134240?language=javascript

function solution(food) {
  let temp = "";

  for (let i = 1; i < food.length; i++) {
    for (let j = 0; j < Math.trunc(food[i] / 2); j++) {
      temp += String(i);
    }
  }

  return temp + "0" + temp.split("").reverse().join("");
}

console.log(solution([1, 3, 4, 6])); // "1223330333221"
console.log(solution([1, 7, 1, 2])); // "111303111"
