// https://school.programmers.co.kr/learn/courses/30/lessons/159994?language=javascript

function solution(cards1, cards2, goal) {
  for (let i = 0; i < cards1.length - 1; i++) {
    if (goal.indexOf(cards1[i]) > goal.indexOf(cards1[i + 1])) {
      return "No";
    }
  }

  for (let i = 0; i < cards2.length - 1; i++) {
    if (goal.indexOf(cards2[i]) > goal.indexOf(cards2[i + 1])) {
      return "No";
    }
  }

  return "Yes";
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
