// https://school.programmers.co.kr/learn/courses/30/lessons/140108?language=javascript

// 오답

function solution(s) {
  const arr = [...s];
  let str = arr[0];
  let answer = 0;
  let count1 = 0;
  let count2 = 0;

  for (let i = 0; i < arr.length; i++) {
    if (str === arr[i]) {
      count1++;
    } else {
      count2++;
    }

    if (count1 === count2) {
      answer++;
      count1 = 0;
      count2 = 0;
      str = arr[i + 1];
    }
  }
  if (str === arr[arr.length - 1]) {
    answer++;
  }
  return answer;
}

console.log(solution("banana")); // 3
console.log(solution("abracadabra")); // 6
console.log(solution("aaabbaccccabba")); // 3
