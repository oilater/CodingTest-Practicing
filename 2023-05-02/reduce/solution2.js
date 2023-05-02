const arr = [1, 2, 3, 4];

const arr2 = arr.map((x) => x + 1);
console.log(arr);
console.log(arr2);

const arr3 = arr.reduce((a, b) => {
    a.push(b + 1);

    return a;
}, []);
console.log(arr3);