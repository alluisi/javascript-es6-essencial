const user = {
    name: 'Alessandra',
    lastname: 'Lamas Luisi'
}

// Recupera as chaves do objeto
console.log('Propriedades do objeto user:', Object.keys(user));

// Recupera os valores das chaves do objeto
console.log('\nValores das propriedades do objeto user:', Object.values(user));

// Retorna um array de arrays contendo [nome_prop, valor_prop]
console.log('\nLista de propriedades e valores:', Object.entries(user));

// Mergear propriedades de objeto
Object.assign(user, { fullName: 'Alessandra Lamas Luisi' });
console.log('\nAdiciona propriedade fullName no objeto user:', user);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos', Object.assign({}, user, { age: 40 }));

// Previne todos as alterações em um objeto
const newObj = { foo: 'bar' };
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariável newObj após as alterações:', newObj);

// Permite apenas a alteração de propriedades existentes em um objeto
const person = { name: 'Alessandra' };
Object.seal(person);

person.name = 'Alessandra Luisi';
delete person.name;
person.age = 40;

console.log('\nVariável person após as alterações:', person);