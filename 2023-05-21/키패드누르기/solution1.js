// https://school.programmers.co.kr/learn/courses/30/lessons/67256?language=javascript

function getDistance(locate, number) {
  if (number === 0) number = 11;
  if (locate === 0) locate = 11;

  let mock = parseInt(Math.abs(number - locate) / 3);
  let namuji = Math.abs(number - locate) % 3;

  return mock + namuji;
}

function solution(numbers, hand) {
  let answer = "";
  const left = [1, 4, 7];
  const right = [3, 6, 9];
  let [l, r] = [10, 12];

  for (let i = 0; i < numbers.length; i++) {
    if (left.includes(numbers[i])) {
      answer += "L";
      l = numbers[i];
    } else if (right.includes(numbers[i])) {
      answer += "R";
      r = numbers[i];
    } else {
      let distanceL = getDistance(l, numbers[i]);
      let distanceR = getDistance(r, numbers[i]);
      console.log(distanceL, distanceR);

      if (distanceL < distanceR) {
        answer += "L";
        l = numbers[i];
      } else if (distanceL > distanceR) {
        answer += "R";
        r = numbers[i];
      } else {
        answer += hand[0].toUpperCase();
        hand[0] === "r" ? (r = numbers[i]) : (l = numbers[i]);
      }
    }
  }

  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")); // "LRLLLRLLRRL"
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left")); // "LRLLRRLLLRR"
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right")); // "LLRLLRLLRL"
