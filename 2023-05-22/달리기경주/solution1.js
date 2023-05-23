// https://school.programmers.co.kr/learn/courses/30/lessons/178871?language=javascript

function solution(players, callings) {
  const map = new Map();

  players.forEach((v, i) => {
    map.set(v, i);
  });

  let mapToArray = [];
  for (let i = 0; i < callings.length; i++) {
    map.set(callings[i], map.get(callings[i]) - 1);
    mapToArray = [...map];
    mapToArray.sort((a, b) => a[1] - b[1]);
    map.set(callings[i], map.get(callings[i]) + 1);

    mapToArray = [...map];
    mapToArray.sort((a, b) => a[1] - b[1]);
  }

  return mapToArray;
}

console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
); // ["mumu", "kai", "mine", "soe", "poe"]
