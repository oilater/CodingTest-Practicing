// https://school.programmers.co.kr/learn/courses/30/lessons/120956?language=javascript

function solution(babbling) {
    let result = 0;
    const can = ["aya", "ye", "woo", "ma"];

    for (let i = 0; i < babbling.length; i++) {
        let temp = babbling[i];
        for (let j = 0; j < can.length; j++) {
            temp = temp.replace(can[j], 'O');
        }

        let oCount = 0;
        for (let j = 0; j < temp.length; j++) {
            if (temp[j] === 'O') {
                oCount += 1;
            }
        }

        // console.log(babbling[i], temp);
        if (temp.length === oCount) {
            result += 1;
        }
    }

    return result;
}

console.log(solution(["aya", "yee", "u", "maa", "wyeoo"])); // 1
// console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"])); // 3
