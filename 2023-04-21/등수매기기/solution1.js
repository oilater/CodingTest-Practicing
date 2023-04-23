// https://school.programmers.co.kr/learn/courses/30/lessons/120882?language=javascript

function solution(score) {
  var answer = [];
  let ranks = [];
  let rank = 1;

  let b = answer[0];
  for (let i = 0; i < score.length; i++) {
    const av = (score[i][0] + score[i][1]) / 2;
    answer.push(av);
  }

  for (let i = 0; i < answer.length; i++) {
    ranks.push(rank);
  }

  for (let i = 0; i < answer.length; i++) {
    for (let j = 0; j < answer.length; j++) {
      if (answer[i] <= answer[j]) {
        ranks[i] += 1;
      }
    }
  }

  return ranks;
}

console.log(
  solution([
    [80, 70],
    [90, 50],
    [40, 70],
    [50, 80],
  ])
); //	[1, 2, 4, 3]
console.log(
  solution([
    [80, 70],
    [70, 80],
    [30, 50],
    [90, 100],
    [100, 90],
    [100, 100],
    [10, 30],
  ])
); //	[4, 4, 6, 2, 2, 1, 7]
