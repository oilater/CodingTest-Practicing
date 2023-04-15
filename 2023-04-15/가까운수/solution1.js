// https://school.programmers.co.kr/learn/courses/30/lessons/120890?language=javascript

function solution(array, n) {
  let a = array[0];
  let b = array[array.length - 1];
  let answer = 0;
  array.sort(function (a, b) {
    return a - b;
  });
  console.log(array);

  for (let i = 0; i < array.length; i++) {
    if (array[i] < n) {
      a = array[i];
    }

    if (array[i] > n) {
      b = array[i];
      break;
    }

    if (array[i] === n) {
      answer = array[i];
      return answer;
    }
  }
  console.log(a, b);
  if (Math.abs(n - a) <= Math.abs(n - b)) {
    answer = a;
  } else {
    answer = b;
  }

  return answer;
}

console.log(solution([3, 10, 50, 28], 20)); // 28
console.log(solution([10, 11, 12], 13)); // 12
console.log(solution([10, 12, 5], 11)); // 10
console.log(solution([12, 11, 9, 11, 10, 19, 11], 10)); // 10
console.log(solution([2, 3, 97, 81, 80, 99], 1)); // 10

//오답
