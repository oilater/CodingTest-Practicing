// https://school.programmers.co.kr/learn/courses/30/lessons/150370?language=javascript

function calculateDate(cur, start) {
  const curDate =
    Number(cur[0]) * 28 * 12 + Number(cur[1]) * 28 + Number(cur[2]);
  const startDate =
    Number(start[0]) * 28 * 12 + Number(start[1]) * 28 + Number(start[2]);

  return curDate - startDate;
}

function solution(today, terms, privacies) {
  // 파라미터 재 정의
  const newToday = today.split(".");
  const newTerms = terms.map((v) => {
    return v.split(" ");
  });

  const map = new Map();
  newTerms.forEach((v) => {
    map.set(v[0], v[1]);
  });

  const newPrivacies = privacies.map((v) => {
    v = v.split(" ");
    v[0] = v[0].split(".");
    v[1] = Number(map.get(v[1])) * 28;
    return v;
  });

  // 시작
  const answer = [];

  newPrivacies.forEach((v, i) => {
    // console.log(v[1], calculateDate(newToday, v[0]));
    if (v[1] <= calculateDate(newToday, v[0])) {
      answer.push(i + 1);
    }
  });

  return answer;
}

console.log(
  solution(
    "2022.05.19",
    ["A 6", "B 12", "C 3"],
    ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
  )
); // [1, 3]
console.log(
  solution(
    "2020.01.01",
    ["Z 3", "D 5"],
    [
      "2019.01.01 D",
      "2019.11.15 Z",
      "2019.08.02 D",
      "2019.07.01 D",
      "2018.12.28 Z",
    ]
  )
); // [1, 4, 5]
