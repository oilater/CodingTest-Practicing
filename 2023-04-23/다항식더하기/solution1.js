// https://school.programmers.co.kr/learn/courses/30/lessons/120863?language=javascript

function solution(polynomial) {
  const arr = polynomial.split(" ");
  let xNum = 0;
  let num = 0;
  let total = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].includes("x")) {
      arr[i] = [...arr[i]];
      if (arr[i][0] === "x") {
        arr[i].unshift(1);
      }
      if (arr[i].length === 3) {
        xNum += Number(arr[i][0] * 10) + Number(arr[i][1]);
      } else {
        xNum += Number(arr[i][0]);
      }
    }

    if (
      !arr[i].includes("x") &&
      !arr[i].includes("+") &&
      !arr[i].includes(" ")
    ) {
      num += Number(arr[i]);
    }
  }

  if (xNum !== 0) {
    if (num !== 0) {
      if (xNum === 1) {
        total.push("x");
        total.push(" + ");
        total.push(String(num));
        return total.join("");
      } else {
        total.push(String(xNum) + "x");
        total.push(" + ");
        total.push(String(num));
        return total.join("");
      }
    } else if (num === 0) {
      if (xNum === 1) {
        total.push("x");
      } else {
        total.push(String(xNum) + "x");
      }
      return total.join("");
    }
  }

  if (xNum === 0) {
    if (num === 0) {
      return 0;
    } else if (num !== 0) {
      total.push(num);
      return total.join("");
    }
  }
}

console.log(solution("3x + 7 + x")); //	"4x + 7"
console.log(solution("x + x + x")); // "3x"
console.log(solution("12x + x + 1x")); // "8"
