// https://school.programmers.co.kr/learn/courses/30/lessons/120908?language=javascript

function solution(str1, str2) {
  var answer = 2;

  for (let i = 0; i < str1.length - (str2.length - 1); i++) {
    let three = "";
    for (let j = 0; j < str2.length; j++) {
      three += str1[i + j];
      console.log(i, j, i + j, str1[i + j]);
    }
    console.log(three, "------------------------");

    if (three == str2) {
      answer = 1;
      break;
    }
  }

  return answer;
}

// console.log(solution("ab6CDE443fgh22iJKlmn1o", "6CD")); // 1
console.log(solution("ppprrrogrammers", "pppp")); // 2
// console.log(solution("AbcAbcA", "AAA")); // 2
