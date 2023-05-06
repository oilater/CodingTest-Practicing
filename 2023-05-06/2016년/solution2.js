// https://school.programmers.co.kr/learn/courses/30/lessons/12901?language=javascript

function solution(a, b) {
  let count = 0;
  let realCount = 0;
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let answer = "";
  // 달 계산
  for (let i = 1; i <= a; i++) {
    for (let j = 1; j <= 31; j++) {
      if (i === 2 && j === 30) {
        i = 3;
        j = 1;
      }

      if (i % 2 === 0 && i > 2 && i < 8 && j === 31) {
        i += 1;
        j = 1;
      }

      if (i % 2 === 1 && i > 8 && j === 31) {
        i += 1;
        j = 1;
      }

      count++;

      if (i === a && j === b) {
        realCount = count;
      }
    }
  }

  answer += days[(realCount + 4) % 7];
  //,,ㅋㅋ

  return answer;
}

console.log(solution(5, 24)); // "TUE"

//1월
//2월일때
//2월이후일때
//일로 계산해서 풀기 어차피 요일은 7일마다 돌아옴
