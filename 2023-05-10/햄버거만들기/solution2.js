// https://school.programmers.co.kr/learn/courses/30/lessons/133502?language=javascript

function solution(ing) {
  let answer = 0;
  const burger = [1, 2, 3, 1];
  for (let i = 0; i < ing.length; i++) {
    if (
      ing[i] === burger[0] &&
      ing[i + 1] === burger[1] &&
      ing[i + 2] === burger[2] &&
      ing[i + 3] === burger[3]
    ) {
      answer++;
      ing.splice(i, 4);

      i -= 3;
    }
  }

  return answer;
}

console.log(solution([2, 1, 1, 2, 3, 1, 2, 3, 1])); // 2
console.log(solution([1, 3, 2, 1, 2, 1, 3, 1, 2])); // 0
