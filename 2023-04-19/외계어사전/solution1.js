// https://school.programmers.co.kr/learn/courses/30/lessons/120869?language=javascript

function solution(spell, dic) {
  const array = [];
  let count = 0;
  for (let i = 0; i < dic.length; i++) {
    const arr = [...dic[i]];
    array.push(arr);
  }

  for (let i = 0; i < array.length; i++) {
    for (let k = 0; k < spell.length; k++) {
      if (array[i].includes(spell[k])) {
        count++;
      }
    }
    if (count === spell.length) {
      return 1;
    }
    count = 0;
  }

  return 2;
}

console.log(solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"])); // 2
console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"])); //	1
console.log(
  solution(["s", "o", "m", "d"], ["moos", "dzx", "smm", "sunmmo", "som"])
); // 2
