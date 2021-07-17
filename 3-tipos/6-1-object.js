let user = {
    name: 'Alessandra'
};
console.log(user);

// Alterando a propriedade de um objeto
user.name = 'Outro nome 1';
console.log(user);

user['name'] = 'Outro nome 2';
console.log(user);

const prop = 'name';
user[prop] = 'Outro nome 3';
console.log(user);

// Criando uma propriedade
user.lastName = 'Lamas Luisi';
console.log(user);

// Deletando uma propriedade
delete user.name;
console.log(user);