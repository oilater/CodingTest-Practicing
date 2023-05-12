// https://school.programmers.co.kr/learn/courses/30/lessons/178871?language=javascript

function solution(players, callings) {
  for (let i = 0; i < callings.length; i++) {
    let aIndex = players.indexOf(callings[i]) - 1;
    const a = players.splice(players.indexOf(callings[i]), 1);
    players.splice(aIndex, 0, a[0]);
    continue;
  }

  return players;
}

console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
); // ["mumu", "kai", "mine", "soe", "poe"]

console.log(
  solution(["mumu", "soe", "poe", "kai", "mine"], ["soe", "mumu", "kai"])
); // ["mumu", "soe", "kai", "poe", "mine"]
