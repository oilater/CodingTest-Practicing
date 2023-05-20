// https://school.programmers.co.kr/learn/courses/30/lessons/42576?language=javascript

function solution(participant, completion) {
  const map = new Map();

  participant.forEach((v, i) => {
    map.set(v, (map.get(v) || 0) + 1);
    map.set(completion[i], (map.get(completion[i]) || 0) - 1);
  });

  for (let [k, v] of map) {
    if (v > 0) {
      return k;
    }
  }
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); // "leo"
console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )
); // "vinko"
console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
); // "mislav"

// 다른 사람의 풀이 그런데 이제 해쉬를 이용한... 대박이네 ㅠ
