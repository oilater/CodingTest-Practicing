// https://school.programmers.co.kr/learn/courses/30/lessons/42862?language=javascript

function solution(n, lost, reserve) {
  const arr = new Array(n).fill(1);

  const newArr = arr.map((v, i) => {
    if (lost.includes(i + 1)) v = 0;
    if (reserve.includes(i + 1)) v += 1;

    return v;
  });
  let answer = 0;

  for (let i = 0; i < newArr.length; i++) {
    if ((newArr[i] === 0) & (newArr[i - 1] === 2)) {
      newArr[i] += 1;
      newArr[i - 1] -= 1;
    }

    if ((newArr[i] === 0) & (newArr[i + 1] === 2)) {
      newArr[i] += 1;
      newArr[i + 1] -= 1;
    }
  }

  for (const item of newArr) {
    if (item > 0) {
      answer++;
    }
  }

  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [3], [1])); // 2
