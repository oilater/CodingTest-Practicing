// https://school.programmers.co.kr/learn/courses/30/lessons/178871?language=javascript

function solution(players, callings) {
  const p = {};

  players.forEach((v, i) => {
    p[v] = i;
  });

  let count = 0;

  for (let i = 0; i < callings.length; i++) {
    p[callings[i]] -= 1;
    p[callings[i - 1]] += 1;
  }
  return p;
}

console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
); // ["mumu", "kai", "mine", "soe", "poe"]
