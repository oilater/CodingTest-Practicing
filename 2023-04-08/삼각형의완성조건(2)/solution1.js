// https://school.programmers.co.kr/learn/courses/30/lessons/120889?language=javascript

function solution(sides) {
  for (let i = 0; i < sides.length; i++) {
    for (let j = 0; j < sides.length; j++) {
      if (sides[j] > sides[j + 1]) {
        let a = sides[j];
        sides[j] = sides[j + 1];
        sides[j + 1] = a;
      }
    }
  }

  if (sides[0] + sides[1] > sides[2]) return 1;
  else return 2;
}

console.log(solution([1, 2, 3])); // 2
console.log(solution([3, 6, 2])); // 2
console.log(solution([199, 72, 222])); // 1
