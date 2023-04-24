// https://school.programmers.co.kr/learn/courses/30/lessons/120921?language=javascript

function solution(A, B) {
  let arr = A.split("");

  let answer = 0;

  if (A === B) {
    return 0;
  }

  let p = "";

  while (A !== B) {
    for (let i = 0; i < arr.length; i++) {
      arr.unshift(arr.pop(arr[arr.length - 1]));
      A = arr.join("");
      answer++;
      if (A === B) {
        return answer;
      } else {
        continue;
      }
    }
    return -1;
  }
}

console.log(solution("hello", "ohell")); //	1
console.log(solution("elloh", "ohell")); //2
console.log(solution("apple", "elppa")); // -1
console.log(solution("atat", "tata")); // 1
console.log(solution("abc", "abc")); // 0
console.log(solution("cab", "abc")); // 2


// let solution=(a,b)=>(b+b).indexOf(a) 다른 사람 풀이 중 이건 대체 무슨 뜻일까..ㅋㅋㅋ