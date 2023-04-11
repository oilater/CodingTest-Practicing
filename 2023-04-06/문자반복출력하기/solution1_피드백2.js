// https://school.programmers.co.kr/learn/courses/30/lessons/120825?language=javascript

function repeat(c, n) {
    let result = '';

    for (let i = 0; i < n; i++) {
        result += c;
    }

    return result;
}

function solution(my_string, n) {
    let answer = "";

    for (let i = 0; i < my_string.length; i++) {
        answer += repeat(my_string[i], n);
    }

    return answer;
}

console.log(solution("hello", 3)); // "hhheeellllllooo"
