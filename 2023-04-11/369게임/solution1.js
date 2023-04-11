// https://school.programmers.co.kr/learn/courses/30/lessons/120891?language=javascript

function solution(order) {
  let answer = 0;
  order = order.toString();
  let arr = [...order];
  const three = [3, 6, 9];
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < three.length; j++) {
      if (Number(arr[i]) === three[j]) {
        count++;
      }
    }
  }
  answer = count;
  return answer;
}

console.log(solution(3)); // 1
console.log(solution(29423)); // 2
