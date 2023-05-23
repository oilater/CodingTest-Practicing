// https://school.programmers.co.kr/learn/courses/30/lessons/178871?language=javascript

function solution(players, callings) {
  const map = new Map();

  players.forEach((v, i) => {
    map.set(v, i);
  });

  callings.forEach((v) => {
    const currIdx = map.get(v);
    const front = players[currIdx - 1];

    [players[currIdx], players[currIdx - 1]] = [
      players[currIdx - 1],
      players[currIdx],
    ];

    map.set(v, map.get(v) - 1);
    map.set(front, map.get(v) + 1);
  });

  return players;
}

console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
); // ["mumu", "kai", "mine", "soe", "poe"]
