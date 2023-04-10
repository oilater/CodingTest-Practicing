// https://school.programmers.co.kr/learn/courses/30/lessons/120823?language=javascript

function solution(n) {
  let answer = "";
  for (let i = 1; i < n + 1; i++) {
    for (let j = 0; j < i; j++) {
      answer += "*";
    }
    answer += "\n";
  }

  return answer.replace(/\"/gi, "");
}

console.log(solution(4));
//*
//**
//***
