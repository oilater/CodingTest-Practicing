// https://school.programmers.co.kr/learn/courses/30/lessons/120876?language=javascript

function solution(lines) {
    let answer = 0;
    const obj = {};

    for (let i = 0; i < lines.length; i++) {
        for (let j = lines[i][0]; j < lines[i][1]; j++) {
            if (obj[j] === undefined) {
                obj[j] = 1;
            } else {
                obj[j] += 1;
            }
        }
        console.log('step', obj);
    }
    console.log('end', obj);

    for (const key in obj) {
        // console.log(`${key}: ${obj[key]}`);
        if (obj[key] > 1) {
            answer += 1;
        }
    }
    // console.log('answer', answer);
    return answer;
}

console.log(solution([[0, 1], [2, 5], [3, 9]])); // 2

// console.log(
//   solution([
//     [0, 1],
//     [2, 5],
//     [3, 9],
//   ])
// ); // 2
// console.log(
//   solution([
//     [-1, 1],
//     [1, 3],
//     [3, 9],
//   ])
// ); // 0
// console.log(
//   solution([
//     [0, 5],
//     [3, 9],
//     [1, 10],
//   ])
// ); // 8
// console.log(
//   solution([
//     [-10, 5],
//     [-10, 5],
//     [8, 11],
//   ])
// ); // 15
// console.log(
//   solution([
//     [-1, 5],
//     [5, 7],
//     [6, 11],
//   ])
// ); // 1
// console.log(
//     solution([
//         [2, 4],
//         [6, 10],
//         [4, 7],
//     ])
// ); // 1

// 정답!!!!!


const obj = {};
console.log(obj);
console.log(obj[1]);
obj[1] = 10;
console.log(obj);
console.log(obj[1]);