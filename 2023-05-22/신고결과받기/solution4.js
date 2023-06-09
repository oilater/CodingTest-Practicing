// https://school.programmers.co.kr/learn/courses/30/lessons/92334?language=javascript

function solution(id_list, report, k) {
  report = [...new Set(report)].map((v) => v.split(" "));
  //신고된 사람들 배열
  const reported = report.map((v) => v[1]);
  //신고 횟수 검증을 위한 배열
  const reportCount = new Array(id_list.length).fill(0);
  // k 번 이상 신고를 받은 사람들 배열
  const kReported = [];

  reported.forEach((v) => {
    reportCount[id_list.indexOf(v)]++;
  });

  reportCount.forEach((v, idx) => {
    if (v >= k) {
      kReported.push(id_list[idx]);
    }
  });
  console.log(kReported);
  const answer = new Array(id_list.length).fill(0);

  report.forEach((v, idx) => {
    if (kReported.includes(v[1])) {
      answer[id_list.indexOf(v[0])]++;
    }
  });

  return answer;
}
console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
); // [2,1,1,0]
console.log(
  solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)
); // [0,0]

console.log(
  solution(["a", "b", "c", "d"], ["a b", "c d", "a c", "b d", "d c"], 2)
); // [1,1,1,1]?
