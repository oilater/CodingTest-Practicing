// https://school.programmers.co.kr/learn/courses/30/lessons/120838?language=javascript

morse = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
};

function solution(letter) {
  const obj = Object.keys(morse);
  const arr = letter.split(" ");
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < obj.length; j++) {
      if (arr[i] === obj[j]) {
        result.push(morse[obj[j]]);
      }
    }
  }

  return result.join("");
}

console.log(solution(".... . .-.. .-.. ---")); // "hello"
console.log(solution(".--. -.-- - .... --- -.")); // "python";
