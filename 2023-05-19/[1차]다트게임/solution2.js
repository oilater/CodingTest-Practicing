// https://school.programmers.co.kr/learn/courses/30/lessons/17682?language=javascript

function solution(dartResult) {
  const result = [...dartResult];
  const bonus = ["S", "D", "T"];
  const option = ["*", "#"];
  const newResult = [];
  let str = "";
  for (let i = 0; i < result.length; i++) {
    str += result[i];

    if (bonus.includes(result[i])) {
      newResult.push(str);
      str = "";
    } else if (option.includes(result[i])) {
      newResult.push(str);
      str = "";
    }
  }

  const realResult = newResult.map((v) => {
    if (v[1] === "S") {
      v = Number(v[0]);
    } else if (v[1] === "D") {
      v = Number(v[0]) ** 2;
    } else if (v[1] === "T") {
      v = Number(v[0]) ** 3;
    }

    if (v[2] === "S") {
      v = 10;
    } else if (v[2] === "D") {
      v = 10 ** 2;
    } else if (v[2] === "T") {
      v = 10 ** 3;
    }

    return v;
  });

  for (let i = 0; i < realResult.length; i++) {
    if (!option.includes(realResult[i])) {
      if (realResult[i + 1] === "*") {
        if (realResult[i + 3] !== "*") {
          realResult[i] *= 2;
        } else {
          realResult[i] *= 4;
        }
      }

      if (realResult[i + 2] === "*") {
        realResult[i] *= 2;
      }

      if (realResult[i + 1] === "#") {
        if (realResult[i + 3] !== "*") {
          realResult[i] *= -1;
        } else {
          realResult[i] *= -2;
        }
      }
    }
  }
  let answer = 0;
  realResult.forEach((v) => {
    if (!isNaN(v)) {
      answer += v;
    }
  });
  return answer;
}

console.log(solution("1S2D*3T")); // 37
console.log(solution("1D2S#10S")); // 9
console.log(solution("1D2S0T")); // 3
console.log(solution("1S*2T*3S")); // 23
console.log(solution("1D#2S*3S")); // 5
console.log(solution("1T2D3D#")); // -4
console.log(solution("1D2S3T*")); // 59
