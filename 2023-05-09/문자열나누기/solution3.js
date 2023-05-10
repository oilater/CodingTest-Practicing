// https://school.programmers.co.kr/learn/courses/30/lessons/140108?language=javascript

// 이것도 ㅠ

function solution(s) {
  const arr = [...s];
  let alpha = "abcdefghijklmnopqrstuvwxyz";
  let sa = new Array(26).fill(0);
  let answer = 0;
  let numArr = new Array(26).fill(0);
  if (arr.length % 2 === 1) {
    answer++;
  }

  for (let i = 0; i < arr.length; i++) {
    let stack = 0;
    stack++;

    sa[alpha.indexOf(arr[i])] += stack;

    if (numArr.includes(sa[alpha.indexOf(arr[i])])) {
      answer++;
      sa.fill(0);
    }
  }

  return answer;
}

console.log(solution("banana")); // 3
console.log(solution("abracadabra")); // 6
console.log(solution("aaabbaccccabba")); // 3
