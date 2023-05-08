// https://school.programmers.co.kr/learn/courses/30/lessons/133499?language=javascript

function solution(babbling) {
  let answer = 0;

  const ong = ["aya", "ye", "woo", "ma"];

  for (let i = 0; i < babbling.length; i++) {
    let temp = 0;
    let s = "";
    let prev = "";
    for (let j = 0; j < babbling[i].length; j++) {
      s += babbling[i][j];

      if (ong.includes(s)) {
        if (s !== prev) {
          temp++;
          prev = s;
          s = "";
        }
      }
    }
    if (temp >= 1 && s.length === 0) {
      answer++;
    }
  }

  return answer;
}

console.log(solution(["aya", "yee", "u", "maa"])); // 1
console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"])); // 2

//babbling for문 돌려서 ong과 같은지 확인
//같은 단어 두번 연속 나오면 false
//다른 단어는 ok
//그러면 한단어는 총 다돌고 그냥 넘겨버리면 된다.
