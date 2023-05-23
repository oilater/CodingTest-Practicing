// https://school.programmers.co.kr/learn/courses/30/lessons/92334?language=javascript

function solution(id_list, report, k) {
  const newReport = report.map((v) => v.split(" ").reverse());

  const map = new Map();
  let arr = [];
  let start = newReport[0][0];
  newReport.forEach((v) => {
    if (v[0] === start && !arr.includes(v[1])) {
      arr.push(v[1]);
    } else {
      start = v[0];
      arr = [];
      arr.push(v[1]);
    }
  });

  // const temp = [...map].map((v) => v[1]).flat();

  // const answer = [];
  // for (const item of id_list) {
  //   let count = 0;
  //   for (const val of temp) {
  //     if (item === val) count++;
  //   }
  //   answer.push(count);
  // }

  return map;
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
