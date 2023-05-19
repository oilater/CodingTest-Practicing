// https://school.programmers.co.kr/learn/courses/30/lessons/12977?language=javascript

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}

console.log(solution([1, 2, 3, 4])); // 1
console.log(solution([1, 2, 7, 6, 4])); // 4
