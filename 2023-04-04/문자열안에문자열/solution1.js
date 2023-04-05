// school.programmers.co.kr/learn/courses/30/lessons/120908?language=javascript

function solution(str1, str2) {
  var answer = 0;

  for (let i = 0; i < str1.length - 2; i++) {
    console.log(str1[i] + str1[i + 1] + str1[i + 2]);
  }

  return answer;
}

console.log(solution("ab6CDE443fgh22iJKlmn1o", "6CD")); // 1
// console.log(solution("ppprrrogrammers", "pppp")); // 2
// console.log(solution("AbcAbcA", "AAA")); // 3
