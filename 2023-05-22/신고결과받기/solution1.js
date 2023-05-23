// https://school.programmers.co.kr/learn/courses/30/lessons/92334?language=javascript

function solution(id_list, report, k) {
  const newReport = report.map((v) => v.split(" "));

  const map = new Map();

  id_list.forEach((v) => {
    let tp = id_list[0];
    map.set(v, 0);
    let count = 0;
    newReport.forEach((a) => (v !== a[1] ? count : v === tp ? count : count++));
    tp = v;
    map.set(v, count);
  });

  const arr = [];
  [...map].forEach((v) => {
    if (v[1] >= k) arr.push(v[0]);
  });

  const answer = [];

  id_list.forEach((v) => {
    let mail = 0;
    newReport.forEach((a) => {
      if (a[0] === v && map.get(a[1]) >= k) mail += 1;
    });
    answer.push(mail);
  });

  return answer;
}

//경고 받은 개수 담은 해쉬맵 완성
//중복 개수만큼 해쉬맵 발류에 넣기 ... 어려웠따 맵을 미리 생성해놓는 것이 아니라 하나씩 생성하면서 비교해야 함

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
