// https://school.programmers.co.kr/learn/courses/30/lessons/120896?language=javascript

function solution(s) {
  let temp = "";
  let answer = "";
  const eng = "abcdefghijklmnopqrstuvwxyz";
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    count = 0;
    for (let j = 0; j < s.length; j++) {
      if (s[i] === s[j]) {
        count++;
      }
    }

    if (count === 1) {
      temp += s[i];
    }
  }

  for (let i = 0; i < eng.length; i++) {
    for (let j = 0; j < temp.length; j++) {
      if (eng[i] === temp[j]) {
        answer += temp[j];
      }
    }
  }

  return answer;
}

console.log(solution("abcabcadc")); // "d"
console.log(solution("abdc")); // "abcd"
console.log(solution("hello")); // "eho"
