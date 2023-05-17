// https://school.programmers.co.kr/learn/courses/30/lessons/81301?language=javascript

function solution(s) {
  const numbers = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const keys = Object.keys(numbers);
  const values = Object.values(numbers).map((v) => Number(v));
  let answer = "";
  let w = "";
  for (let i = 0; i < s.length; i++) {
    w += s[i];

    if (keys.includes(w)) {
      answer += String(numbers[w]);
      w = "";
    } else if (values.includes(Number(w))) {
      answer += String(w);
      w = "";
    }
  }

  return Number(answer);
}

console.log(solution("one4seveneight")); // 1478
console.log(solution("23four5six7")); // 234567
console.log(solution("2three45sixseven")); // 234567
console.log(solution("123")); // 123
