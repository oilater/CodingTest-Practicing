// https://school.programmers.co.kr/learn/courses/30/lessons/178871?language=javascript

function solution(players, callings) {
  const hash = new Map();

  players.forEach((name, index) => {
    hash.set(name, index);
  });
  // 이해 완

  callings.forEach((name) => {
    const currIdx = hash.get(name);
    const front = players[currIdx - 1];

    [players[currIdx], players[currIdx - 1]] = [
      players[currIdx - 1],
      players[currIdx],
    ];

    hash.set(name, hash.get(name) - 1);
    hash.set(front, hash.get(name) + 1);
  });

  return players;
}

console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
); // ["mumu", "kai", "mine", "soe", "poe"]
