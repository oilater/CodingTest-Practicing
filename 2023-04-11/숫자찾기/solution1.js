// https://school.programmers.co.kr/learn/courses/30/lessons/120904?language=javascript

function solution(num, k) {
  let answer = 0;
  num = num.toString();
  const arr = [...num];

  for (let i = 0; i < arr.length; i++) {
    if (Number(arr[i]) === k) {
      answer = i + 1;
      break;
    } else {
      answer = -1;
    }
  }

  return answer;
}

console.log(solution(29183, 1)); //	3
console.log(solution(232443, 4)); //	4
console.log(solution(123456, 7)); //	-1
