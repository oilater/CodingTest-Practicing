// https://school.programmers.co.kr/learn/courses/30/lessons/120850

function solution(my_string) {
  const answer = [];
  let arr = [...my_string];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 100) {
      arr[i] = Number(arr[i]);
      answer.push(arr[i]);
    }
  }

  for (let i = 0; i < answer.length; i++) {
    for (let j = 0; j < answer.length; j++) {
      if (answer[j] > answer[j + 1]) {
        let a = answer[j];
        answer[j] = answer[j + 1];
        answer[j + 1] = a;
      }
    }
  }

  return answer;
}

console.log(solution("hi12392")); // [1, 2, 2, 3, 9]
console.log(solution("p2o4i8gj2")); //[2, 2, 4, 8]
console.log(solution("abcde0")); // [0]
