// https://school.programmers.co.kr/learn/courses/30/lessons/120822?language=javascript

function reverse(arr) {
    const answer = [];

    for (let i = 0; i < arr.length; i++) {
        const j = arr.length - 1 - i;
        // console.log(j, arr[j]);
        answer.push(arr[j]);
    }

    return answer;
}

function strToArr(s) {
    const answer = [];

    for (let i = 0; i < s.length; i++) {
        answer.push(s[i]);
    }

    return answer;
}

function arrToStr(arr) {
    let result = '';

    for (let i = 0; i < arr.length; i++) {
        result += arr[i];
    }

    return result;
}

function solution(my_string) {
    const answer = strToArr(my_string);
    const reversed = reverse(answer);
    const result = arrToStr(reversed);

    return result;
}

console.log(solution("jaron")); // "noraj"
console.log(solution("bread")); //	"daerb"
