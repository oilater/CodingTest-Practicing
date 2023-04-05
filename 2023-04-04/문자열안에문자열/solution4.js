// https://school.programmers.co.kr/learn/courses/30/lessons/120908?language=javascript

function solution(str1, str2) {
  let answer = 2;

  for (let i = 0; i < str1.length - (str2.length - 1); i++) {
    let three = "";
    for (let j = i; j < str2.length + i; j++) {
      three += str1[j];
      // console.log(j, str1[j]);
    }
    // console.log(three, "------------------------");

    if (three === str2) {
      answer = 1;
      break;
    }
  }

  return answer;
}

console.log(solution("ab6CDE443fgh22iJKlmn1o", "6CD")); // 1
console.log(solution("ppprrrogrammers", "pppp")); // 2
console.log(solution("AbcAbcA", "AAA")); // 2
