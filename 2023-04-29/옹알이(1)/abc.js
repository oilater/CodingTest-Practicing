function solution() {
  const alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < alpha.length; i++) {
    console.log(`function ${alpha[i].toLowerCase()}Counter(s) {
      return counter(s, '${alpha[i]}');
    }`);
  }
}

solution();

// function aCounter(s) {
//     return counter(s, 'A');
// }
// function bCounter(s) {
//     return counter(s, 'B');
// }
// .....
// .....
// .....
// .....
// function zCounter(s) {
//     return counter(s, 'Z');
// }
