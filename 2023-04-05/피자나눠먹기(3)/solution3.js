// https://school.programmers.co.kr/learn/courses/30/lessons/120816?language=javascript

function solution(slice, n) {
    let answer = 0;

    if (n <= slice) {
        answer = 1;
    } else if (n % slice) {
        answer = Math.trunc(n / slice) + 1;
    } else {
        answer = n / slice;
    }

    return answer;
}

console.log(solution(7, 10)); // 2
console.log(solution(4, 12)); // 3
