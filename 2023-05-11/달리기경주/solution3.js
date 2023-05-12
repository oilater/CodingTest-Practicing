// https://school.programmers.co.kr/learn/courses/30/lessons/178871?language=javascript

function solution(players, callings) {
  const arr = players.map((value) => players.indexOf(value));

  for (let i = 0; i < callings.length; i++) {
    const a = arr.splice(players.indexOf(callings[i]), 1);
    console.log(arr, a);
    arr.splice(players.indexOf(callings[i]) - 1, 0, a[0]);
  }

  return 0;
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
