// https://school.programmers.co.kr/learn/courses/30/lessons/120923?language=javascript

function solution(num, total) {
    let n = total;

    while (true) {
        let sum = 0;
        let arr = [];
        for (let i = 1; i < num + 1; i++) {
            arr.unshift(n - i);
            sum += n - i;
        }
        // console.log(sum, arr);

        if (sum === total) {
            return arr;
        }

        n -= 1;
    }
}

console.log(solution(3, 12)); // [3, 4, 5]
// console.log(solution(5, 15)); // [1, 2, 3, 4, 5]
// console.log(solution(4, 14)); // [2, 3, 4, 5]
// console.log(solution(5, 5)); // [-1, 0, 1, 2, 3]
