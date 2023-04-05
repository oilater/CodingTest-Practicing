// 문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.

function solution(str1, str2) {
  let answer = 2;

  for (let i = 0; i < str1.length - (str2.length - 1); i++) {
    let three = "";
    for (let j = i; j < str2.length + i; j++) {
      three += str1[j];
    }
    if (three === str2) {
      answer = 1;
      break;
    }
  }
  return answer;
}

console.log(solution("ab6CDE443fgh22iJKlmn1o", "6CD")); // 1
console.log(solution("ppprrrogrammers", "pppp")); // 2
console.log(solution("AbcAbcA", "AAA")); // 3
