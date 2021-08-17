const arr = [1, 2, 3, 4];

const arrIterator = arr.keys();

console.log(arrIterator.next());
// { value: 0, done: false }

console.log(arrIterator.next());
// { value: 1, done: false }

console.log(arrIterator.next());
// { value: 2, done: false }

console.log(arrIterator.next());
// { value: 3, done: false }

console.log(arrIterator.next());
// { value: undefined, done: true }