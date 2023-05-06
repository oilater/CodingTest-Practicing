// https://school.programmers.co.kr/learn/courses/30/lessons/12921?language=javascript

//n의 제곱근개까지 소수 만드는 함수
function getPrime(number) {
  let num = Math.sqrt(number);
  let arr = [];
  for (let i = 1; i <= num; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        count++;
      }
    }
    if (count < 3 && count === 2) {
      arr.push(i);
    }
  }

  return arr;
}

function solution(n) {
  let answer = 0;

  if (n <= 5) {
    for (let i = 2; i <= n; i++) {
      let count = 0;

      for (let j = 0; j <= i; j++) {
        if (i % j === 0) {
          count++;
        }
      }

      if (count < 3 && count === 2) {
        answer++;
      }
    }
  } else {
    const arr = getPrime(n);

    for (let i = 6; i <= n; i++) {
      let count = 0;
      for (let j = 0; j < arr.length; j++) {
        if (i % arr[j] !== 0) {
          count++;
        }
      }
      if (count === arr.length) {
        answer++;
      }
    }
    answer += 3;
  }

  return answer;
}

console.log(solution(10)); // 4
console.log(solution(5)); // 3

// test case 3개 시간 초과
