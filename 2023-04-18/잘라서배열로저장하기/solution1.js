// https://school.programmers.co.kr/learn/courses/30/lessons/120913?language=javascript

function solution(my_str, n) {
  const answer = [];
  let temp = "";
  for (let i = 0; i < my_str.length; i++) {
    temp += my_str[i];

    if ((i + 1) % n === 0) {
      answer.push(temp);
      temp = "";
    }
  }

  if (my_str.length % n !== 0) {
    answer.push(temp);
  }

  return answer;
}

console.log(solution("abc1Addfggg4556b", 6)); // ["abc1Ad", "dfggg4", "556b"]
console.log(solution("abcdef123", 3)); // ["abc", "def", "123"]
