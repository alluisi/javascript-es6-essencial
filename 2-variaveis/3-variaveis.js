const name = 'Alessandra';

// Não podemos alterar o valor
/* name = 'Guilherme'; */

const user = {
    name: 'Alessandra'
};

// Mas se for um objeto podemos trocar suas propriedades
user.name = 'Guilherme';

// Não podemos fazer o objeto "apontar" para outro lugar
/*
user = {
    name: 'Guilherme'
}
*/

const persons = ['Alessandra', 'Guilherme', 'Pedro'];

// Podemos adicionar novos itens
persons.push('João');

// Podemos remover algum item
persons.shift();

// Podemos alterar diretamente
persons[1] = 'Aline';