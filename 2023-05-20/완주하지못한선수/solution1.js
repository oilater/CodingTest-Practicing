// https://school.programmers.co.kr/learn/courses/30/lessons/42576?language=javascript

function solution(participant, completion) {
  participant.sort();
  completion.sort();

  let length = participant.length;
  participant.forEach((v, i) => {
    if (completion.includes(v)) {
      length -= 1;
      completion.splice(completion.indexOf(v), 1, null);
      participant.splice(i, 1, null);
    }
  });

  return participant.join("").split(null).join("");
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

//정확성 통과, 효율성 실패
