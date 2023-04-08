// https://school.programmers.co.kr/learn/courses/30/lessons/120824?language=javascript

function solution(num_list) {
  let answer = [];
  let countEven = 0;
  let countOdd = 0;
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) {
      countEven++;
    } else {
      countOdd++;
    }
  }
  answer.push(countEven, countOdd);

  return answer;
}

console.log(solution([1, 2, 3, 4, 5])); //[2, 3]
console.log(solution([1, 3, 5, 7])); //[0, 4)
