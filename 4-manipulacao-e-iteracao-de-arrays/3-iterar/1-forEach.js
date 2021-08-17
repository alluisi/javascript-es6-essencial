const arr = [1, 2, 3, 4, 5];

arr.forEach((value, index, array) => {
    console.log(`${index}: ${value} - ${array}`);
});
/*
0: 1 - 1,2,3,4,5
1: 2 - 1,2,3,4,5
2: 3 - 1,2,3,4,5
3: 4 - 1,2,3,4,5
4: 5 - 1,2,3,4,5
*/