function Animal() {
    this.qtdePatas = 4;
}

const cachorro = new Animal();

console.log(cachorro.__proto__ === Animal.prototype); // true
console.log(Animal.__proto__ === Function.prototype); // true
console.log(cachorro instanceof Animal); // true
console.log(cachorro instanceof Function); // false