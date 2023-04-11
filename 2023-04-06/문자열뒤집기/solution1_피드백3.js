// https://school.programmers.co.kr/learn/courses/30/lessons/120822?language=javascript


function solution(my_string) {
    return my_string.split('').reverse().join('');
    // return arrToStr(reverse(strToArr(my_string)));
}

// console.log(solution("jaron")); // "noraj"
// console.log(solution("bread")); //	"daerb"

console.log('abc'.split(''));
console.log('abc'.split('b'));
console.log('abc'.split('a'));
console.log('abc'.split('c'));
console.log('abcdef'.split('bcd'));
console.log(['a', 'b', 'c'].join(''));