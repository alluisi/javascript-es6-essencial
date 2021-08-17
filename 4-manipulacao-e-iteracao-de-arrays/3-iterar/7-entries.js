const arr = [1, 2, 3, 4];

const arrIterator = arr.entries();

console.log(arrIterator.next());
// { value: [ 0, 1 ], done: false }

console.log(arrIterator.next());
// { value: [ 1, 2 ], done: false }

console.log(arrIterator.next());
// { value: [ 2, 3 ], done: false }

console.log(arrIterator.next());
// { value: [ 3, 4 ], done: false }

console.log(arrIterator.next());
// { value: undefined, done: true }