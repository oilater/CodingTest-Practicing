// https://school.programmers.co.kr/learn/courses/30/lessons/92334?language=javascript

function solution(id_list, report, k) {
  report = [...new Set(report)].map((v) => v.split(" "));

  const reportCount = new Array(id_list.length).fill(0);

  report.forEach((v) => {
    reportCount[id_list.indexOf(v[1])]++;
  });

  const reported = [];
  reportCount.forEach((v, i) => {
    if (v >= k) reported.push(id_list[i]);
  });

  const answer = new Array(id_list.length).fill(0);
  report.forEach((v) => {
    if (reported.includes(v[1])) {
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
