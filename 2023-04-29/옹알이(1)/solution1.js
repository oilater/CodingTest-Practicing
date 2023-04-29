// https://school.programmers.co.kr/learn/courses/30/lessons/120956?language=javascript

function solution(babbling) {
  let answer = 0;
  let num = 0;
  let s = "";
  const ong = ["aya", "ye", "woo", "ma"];

  for (let i = 0; i < babbling.length; i++) {
    for (let j = 0; j < babbling[i].length; j++) {
      s += babbling[i][j];

      if (ong.includes(s)) {
        num++;
        s = "";
      }
    }

    if (num >= 1) {
      answer++;
      num = 0;
    }

    if (s !== "") {
      if (s === babbling[i]) {
        s = "";
        continue;
      }

      if (s.length < babbling[i].length) {
        answer--;
        s = "";
      }
    }
  }

  return answer;
}

console.log(solution(["aya", "yee", "u", "maa", "wyeoo"])); // 1
console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"])); // 3
