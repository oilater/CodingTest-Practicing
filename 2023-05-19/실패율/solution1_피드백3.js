// https://school.programmers.co.kr/learn/courses/30/lessons/42889?language=javascript

function range(start, end) {
  const arr = [];

  if (end === undefined) {
    end = start;
    start = 0;
  }

  for (let i = start; i < end; i++) {
    arr.push(i);
  }

  return arr;
}

function solution(N, stages) {
  stages.sort((a, b) => a - b);

  const arr = range(1, N + 1).map((i) => stages.filter((x) => x === i).length);

  let length = stages.length;
  const arr2 = arr.map((v) => {
    const a = v / length;
    length -= v;

    return a;
  });

  const answer = arr2.map((v, i) => [v, i + 1]);

  return answer.sort((a, b) => b[0] - a[0]).map(([_, v]) => v);
}

console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3,4,2,1,5]
console.log(solution(4, [4, 4, 4, 4, 4])); // [4,1,2,3]
