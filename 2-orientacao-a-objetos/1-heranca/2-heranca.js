function Animal() { }

console.log(Animal.constructor); // f Function() {[native code]}
// f Animal.constructor -> f Function -> Function.prototype.constructor -> f Object() {} -> Object.prototype = null;

function Animal() {
    this.qtdePatas = 4;
}

const cachorro = new Animal();

console.log(cachorro.qtdePatas); // 4