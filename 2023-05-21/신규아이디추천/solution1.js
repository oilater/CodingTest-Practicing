// https://school.programmers.co.kr/learn/courses/30/lessons/72410?language=javascript

function solution(new_id) {
  let newArr = [...new_id.toLowerCase()];
  let answer = "";
  const alpha = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "1234567890";
  const alphaBig = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
  const special = "-_.";


  // 2단계
  for (let item of newArr) {
    if (
      !alpha.includes(item) &&
      !special.includes(item) &&
      !numbers.includes(item)
    ) {
      newArr.splice(newArr.indexOf(item), 1, "R");
    }
  }

  newArr = newArr.join("").split("R").join("").split("");

  // 3단계
  /* 
    배열에서 마침표(.)가 2번 이상 연속될 떄 하나의 마침표(.)로 바꾸고 싶은데
    예를 들어 ['b', '.', '.', '.', 'a', '.'] ---> ['b', '.', 'a','.'] 로 만들고 싶을떄 
     저는 아래 코드처럼 번거롭게 했는데,,더 좋은 방법이 있을까요?
     for 문 돌고 있을 때 splice 쓰는게 조금 까다롭네요 ㅠ
  */
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === "." && newArr[i] === newArr[i + 1]) {
      newArr.splice(i, 1, "R");
    }
  }
  newArr = newArr.join("").split("R").join("").split("");

  // 4단계
  if (newArr[0] === ".") {
    newArr[0] = newArr[0].replace(".", "R");
  } else if (newArr[newArr.length - 1] === ".") {
    newArr[newArr.length - 1] = newArr[newArr.length - 1].replace(".", "R");
  }

  newArr = newArr.join("").split("R").join("").split("");

  // 5단계
  if (newArr.length === 0) {
    newArr.push("a");
  }

  // 6단계
  if (newArr.length >= 16) newArr.length = 15;
  if (newArr[newArr.length - 1] === ".") {
    newArr.length = newArr.length - 1;
  }

  // 7단계
  while (newArr.length < 3) {
    newArr.push(newArr[newArr.length - 1]);
  }

  return newArr.join("");
}

console.log(solution("...!@BaT#*..y.abcdefghijklm")); // "bat.y.abcdefghi"
console.log(solution("z-+.^.")); // "z--"
console.log(solution("=.=")); // "aaa"
console.log(solution("123_.def")); // "123_.def"
console.log(solution("abcdefghijklmn.p")); // "abcdefghijklmn"
