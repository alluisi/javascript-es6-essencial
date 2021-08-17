const arr = [1, 2, 3, 4];

const novoArr1 = arr.flatMap(value => [value * 2]);
console.log(novoArr1);
// [ 2, 4, 6, 8 ]

const novoArr2 = arr.flatMap(value => [[value * 2]]);
console.log(novoArr2);
// [ [ 2 ], [ 4 ], [ 6 ], [ 8 ] ]