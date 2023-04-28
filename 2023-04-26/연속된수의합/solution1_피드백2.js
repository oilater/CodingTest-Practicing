// https://school.programmers.co.kr/learn/courses/30/lessons/120923?language=javascript

function solution(num, total) {
    const n = total / num;
    let start = 0;

    if (num % 2 === 0) {
        start = n + 0.5 - num / 2;
        // console.log('start', start);
        // console.log(n, num / 2, start);
    } else {
        start = n - Math.floor(num / 2);
    }
    // console.log('start', start);

    let arr = [];
    for (let i = start; i < start + num; i++) {
        arr.push(i);
    }
    return arr;
}

console.log(solution(3, 12)); // [3, 4, 5]
// console.log(solution(5, 15)); // [1, 2, 3, 4, 5]
// console.log(solution(4, 14)); // [2, 3, 4, 5]
// console.log(solution(5, 5)); // [-1, 0, 1, 2, 3]
