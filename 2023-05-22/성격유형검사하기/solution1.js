// https://school.programmers.co.kr/learn/courses/30/lessons/118666?language=javascript

function solution(survey, choices) {
  let answer = "";

  const mbti = {
    R: 0,
    T: 0,
    C: 0,
    F: 0,
    J: 0,
    M: 0,
    A: 0,
    N: 0,
  };

  for (let i = 0; i < choices.length; i++) {
    if (choices[i] > 4) {
      mbti[survey[i][1]] += choices[i] - 4;
    } else if (choices[i] < 4) {
      mbti[survey[i][0]] += 4 - choices[i];
    }
  }

  answer += mbti.R > mbti.T ? "R" : mbti.R === mbti.T ? "R" : "T";
  answer += mbti.C > mbti.F ? "C" : mbti.C === mbti.F ? "C" : "F";
  answer += mbti.J > mbti.M ? "J" : mbti.J === mbti.M ? "J" : "M";
  answer += mbti.A > mbti.N ? "A" : mbti.A === mbti.N ? "A" : "N";

  return answer;
}

console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5])); // "TCMA"
console.log(solution(["TR", "RT", "TR"], [7, 1, 3])); // "RCJA"
