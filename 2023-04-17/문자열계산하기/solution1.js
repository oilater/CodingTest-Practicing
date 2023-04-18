// https://school.programmers.co.kr/learn/courses/30/lessons/120902?language=javascript

function solution(my_string) {
  const arr = my_string.split(" ");
  let calc = Number(arr[0]);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "+") {
      calc += Number(arr[i + 1]);
    }

    if (arr[i] === "-") {
      calc -= Number(arr[i + 1]);
    }
  }

  return calc;
}

console.log(solution("3 + 4")); // 7
