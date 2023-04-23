// https://school.programmers.co.kr/learn/courses/30/lessons/120880?language=javascript

function solution(numlist, n) {
  let answer = [];

  for (let i = 0; i < numlist.length; i++) {
    answer.push(numlist[i] - n);
  }
  console.log(answer, "수정전");
  answer.sort((a, b) => a - b);
  console.log(answer, "정렬후");
  let arr = [];
  let q = answer[0];
  while (answer.length !== 0) {
    for (let i = 0; i < answer.length; i++) {
      if (Math.abs(answer[i]) <= Math.abs(q)) {
        q = answer[i];
      }
    }
    arr.push(q);

    for (let i = 0; i < answer.length; i++) {
      if (answer[i] === q) {
        answer.splice(i, 1);
        q = answer[0];
        break;
      }
    }
  }

  arr = arr.map((value) => value + n);

  return arr;
}

console.log(solution([5, 4, 7, 8, 6, 3, 2], 5)); // [36, 40, 20, 47, 10, 6, 7000, 10000]  내 테스트 케이스
console.log(solution([1, 2, 3, 4, 5, 6], 4)); // [4, 5, 3, 6, 2, 1]
console.log(solution([10000, 20, 36, 47, 40, 6, 10, 7000], 30)); // [36, 40, 20, 47, 10, 6, 7000, 10000]

//풀긴했는데 절대 값 같을 때 큰수 작은수 누가 먼저 나오는지 헷갈림 sort 를 하면 되는건가  양수 음수 일 떄 안달라지나.,,. 아 이해됨 for 이 돌면서 정렬된 숫자의 끝에 있는 값이 q로 들어가기 때문에!!
