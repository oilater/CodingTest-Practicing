// https://school.programmers.co.kr/learn/courses/30/lessons/159994?language=javascript

function solution(cards1, cards2, goal) {
  let arr = [];
  let arr2 = [];
  let index1 = 0;
  let index2 = 0;

  for (let i = 0; i < cards1.length; i++) {
    for (let j = 0; j < goal.length; j++) {
      if (cards1[i] === goal[j]) {
        index1 = goal.indexOf(cards1[i]);
        arr.push(index1);
      }
    }
  }

  for (let i = 0; i < cards2.length; i++) {
    for (let j = 0; j < goal.length; j++) {
      if (cards2[i] === goal[j]) {
        index2 = goal.indexOf(cards2[i]);
        arr2.push(index2);
      }
    }
  }

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return "No";
    }
  }

  for (let i = 0; i < arr2.length - 1; i++) {
    if (arr2[i] > arr2[i + 1]) {
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
console.log(
  solution(["i", "see", "to"], ["you", "now", "me"], ["i", "see", "now", "me"])
); //"No", 반례
