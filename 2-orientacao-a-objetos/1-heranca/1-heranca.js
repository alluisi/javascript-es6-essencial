// prototype é uma variável que armazena as definições do nosso objeto
// tipo constructor

const myText = 'Hello prototype!';
myText.split(''); // <- de onde vem esse "split"?

// função construtora "String"
const myText = String('Hello prototype!');
console.log(myText.__proto__.split); // f split() {[native code]}

// toda função construtora tem um prototype (__proto__) atrelado a ela
console.log(String.prototype.split); // f split() {[native code]}
console.log(myText.__proto__.split === String.prototype.split) // true
console.log(myText.constructor === String) // true

// O __proto__ aponta para um prototype
// e esse prototype é criado a partir de uma função construtora
// myText.constructor -> String
// myText.__proto__ -> String.prototype