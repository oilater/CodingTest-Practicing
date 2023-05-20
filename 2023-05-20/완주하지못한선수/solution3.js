// https://school.programmers.co.kr/learn/courses/30/lessons/42576?language=javascript

function solution(participant, completion) {
  const map = new Map();
  answer = "";

  completion.forEach((v, i) => {
    map.set(i, v);
  });

  participant.forEach((v, i) => {
    if (map.has(completion.indexOf(v))) {
      map.delete(completion.indexOf(v));
    } else {
      answer += v;
    }
  });

  return answer;
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); // "leo"
console.log(
  solution(
    ["marina", "josipa", "nikola", "vinko", "filipa"],
    ["josipa", "filipa", "marina", "nikola"]
  )
); // "vinko"
console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
); // "mislav"

//정확성 효율성 둘다 실패