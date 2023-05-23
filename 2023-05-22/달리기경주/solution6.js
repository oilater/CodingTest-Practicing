// https://school.programmers.co.kr/learn/courses/30/lessons/178871?language=javascript

function solution(players, callings) {
  const p = {};

  players.forEach((v, i) => {
    p[v] = i;
  });

  callings.forEach((v) => {
    const cur = p[v];
    const prev = p[cur - 1];

    [players[cur], players[cur - 1]] = [players[cur - 1], players[cur]];

    p[v] -= 1;
    p[players[cur]] += 1;
  });

  return p;
}

console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
); // ["mumu", "kai", "mine", "soe", "poe"]
