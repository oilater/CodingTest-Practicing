// https://school.programmers.co.kr/learn/courses/30/lessons/178871?language=javascript

function solution(players, callings) {
  const arr = players.map((value) => players.indexOf(value));

  for (let i = 0; i < callings.length; i++) {
    console.log(arr);
    let a = --arr[players.indexOf(callings[i])];
    ++arr[arr.indexOf(a)];
  }

  return arr.map((value) => players[value]);
}

// console.log(
//   solution(
//     ["mumu", "soe", "poe", "kai", "mine"],
//     ["kai", "kai", "mine", "mine"]
//   )
// ); // ["mumu", "kai", "mine", "soe", "poe"]

console.log(
  solution(["mumu", "soe", "poe", "kai", "mine"], ["soe", "mumu", "kai"])
); // ["mumu", "soe", "kai", "poe", "mine"]
