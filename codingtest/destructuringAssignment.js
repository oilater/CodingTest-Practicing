var a, b, rest;
[a, b] = [10, 20];
console.log(a); // 10
console.log(b); // 20

[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a); // 10
console.log(b); // 20
console.log(rest); // [30, 40, 50]

({ a, b } = { a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20

// Stage 4(finished) proposal
({ a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 });
console.log(a); // 10
console.log(b); // 20
console.log(rest); // {c: 30, d: 40}

var x = [1, 2, 3, 4, 5];
var [y, z] = x;
console.log(y, z);

var foo = ["one", "two", "three"];

var [red, yellow, green] = foo;
console.log(red); // "one"
console.log(yellow); // "two"
console.log(green); // "three"

var a, b;

[a, b] = [1, 2];
console.log(a); // 1
console.log(b); // 2

//변수에 기본값을 할당하면, 분해한 값이 undefined일 때 그 값을 대신 사용합니다.
var a, b;

[a = 5, b = 7] = [1];
console.log(a); // 1
console.log(b); // 7

//변수 값 교환하기
var a = 1;
var b = 3;

[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

//함수가 반환한 배열 분석
function f() {
  return [1, 2];
}

var a, b;
[a, b] = f();
console.log(a); // 1
console.log(b); // 2

//일부 반환값 무시하기
function f() {
  return [1, 2, 3];
}

let [a, , c] = f();
console.log(a, c);

//변수에 배열의 나머지를 할당하기
var [a, ...b] = [1, 2, 3];
console.log(a); // 1
console.log(b); // [2, 3]