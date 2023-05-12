// https://school.programmers.co.kr/learn/courses/30/lessons/172928?language=javascript

function solution(park, routes) {
  const answer = [];
  //routes[i] 정리
  for (let i = 0; i < routes.length; i++) {
    routes[i] = routes[i].split(" ");
  }

  //start 좌표 구하기
  let start = [];
  for (let i = 0; i < park.length; i++) {
    for (let j = 0; j < park[i].length; j++) {
      if (park[i][j].includes("S")) {
        start = [i, j];
        break;
      }
    }
  }

  let start0 = start[0];
  let start1 = start[1];

  for (let i = 0; i < routes.length; i++) {
    if (routes[i][0] === "N") {
      while (routes[i][1]--) {
        start[0]--;
        if (
          park[start[0]][start[1]] === "X" ||
          park[start[0]][start[1]] === undefined
        ) {
          start[0] = start0;
          start[1] = start1;
          break;
        }
      }

      start0 = start[0];
      start1 = start[1];
    }

    if (routes[i][0] === "S") {
      while (routes[i][1]--) {
        start[0]++;
        if (
          park[start[0]][start[1]] === "X" ||
          park[start[0]][start[1]] === undefined
        ) {
          start[0] = start0;
          start[1] = start1;
          break;
        }
      }
      start0 = start[0];
      start1 = start[1];
    }

    if (routes[i][0] === "E") {
      while (routes[i][1]--) {
        start[1]++;
        if (
          park[start[0]][start[1]] === "X" ||
          park[start[0]][start[1]] === undefined
        ) {
          start[0] = start0;
          start[1] = start1;
          break;
        }
      }
      start0 = start[0];
      start1 = start[1];
    }

    if (routes[i][0] === "W") {
      while (routes[i][1]--) {
        start[1]--;

        if (
          park[start[0]][start[1]] === "X" ||
          park[start[0]][start[1]] === undefined
        ) {
          start[0] = start0;
          start[1] = start1;
          break;
        }
      }
      start0 = start[0];
      start1 = start[1];
    }
  }

  return start;
}

console.log(solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"])); // [2,1]
console.log(solution(["SOO", "OXX", "OOO"], ["E 2", "S 2", "W 1"])); // [0,1]
console.log(solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"])); // [0,0]

// if (park[start[0]][start[1]] === "X") {
//     start[0] = start0;
//     start[1] = start1;
//   }
