// https://school.programmers.co.kr/learn/courses/30/lessons/159994?language=javascript

function solution(cards1, cards2, goal) {
  const length = goal.length;

  for (let i = 0; i < length; i++) {
    if (goal[0] === cards1[0]) {
      goal.shift();
      cards1.shift();
    }

    if (goal[0] === cards2[0]) {
      goal.shift();
      cards2.shift();
    }
  }

  if (goal[0] === undefined) {
    return "Yes";
  }

  return "No";
}

console.log(
  solution(
    ["i", "drink", "water"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
); //"Yes"
console.log(
  solution(
    ["i", "water", "drink"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
); //"No"
console.log(
  solution(["i", "see", "to"], ["you", "now", "me"], ["i", "see", "now", "me"])
); //"No", 반례

//정답!
