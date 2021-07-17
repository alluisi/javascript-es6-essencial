// break
console.log('exemplo da utilização do break');

var index = 0;

while (true) {
    index++
    if (index > 2) {
        break;
    }
    console.log(index);
};

// continue
console.log('\nExemplo da utilização de continue');

const array = [1, 2, 3, 4, 5, 6];

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element % 2 === 0) {
        continue;
    }
    console.log(element);
}