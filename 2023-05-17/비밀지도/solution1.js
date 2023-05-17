// https://school.programmers.co.kr/learn/courses/30/lessons/17681?language=javascript

//arr 변환 함수
function transformArr(arr, width) {
  let newArr = arr.map((value) => {
    value = [...value.toString(2)];
    while (value.length !== width) {
      value.unshift("0");
    }
    return value;
  });

  return newArr;
}

function solution(n, arr1, arr2) {
  const answer = [];
  let newArr1 = transformArr(arr1, n);
  let newArr2 = transformArr(arr2, n);

  for (let i = 0; i < newArr1.length; i++) {
    for (let j = 0; j < newArr1[i].length; j++) {
      if (Number(newArr1[i][j]) || Number(newArr2[i][j])) {
        newArr1[i][j] = "#";
      } else {
        newArr1[i][j] = " ";
      }
    }
  }

  return newArr1.map((value) => value.join(""));
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])); // ["#####","# # #", "### #", "# ##", "#####"]
// console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10])); // "######", "### #", "## ##", " #### ", " #####", "### # "]
