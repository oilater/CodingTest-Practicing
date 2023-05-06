// https://school.programmers.co.kr/learn/courses/30/lessons/12901?language=javascript

function solution(a, b) {
    let aDay = 0;
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let answer = "";
  // 달 계산
  for (let i = 1; i < a + 1; i++) {
    if(i % 2 === 1 && i < 8) { // 1 3 5 7
        aDay += 31;
    }

    if(i % 2 === 0 && i >= 8) {
        aDay += 31;
    }
  }
  return answer;
}

console.log(solution(5, 24)); // "TUE"

//1월
//2월일때
//2월이후일때
//일로 계산해서 풀기 어차피 요일은 7일마다 돌아옴
