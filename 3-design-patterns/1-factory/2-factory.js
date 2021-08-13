/*
function Pessoa() {
    return {
        name: 'Alessandra',
        lastName: 'Luisi'
    }
}

const p = Pessoa();
console.log(p);
// { name: 'Alessandra', lastName: 'Luisi' }
*/

/*
function Pessoa(name) {
    return {
        name,
        lastName: 'Luisi'
    }
}

const p = Pessoa('Custom Name');
console.log(p);
// { name: 'Custom Name', lastName: 'Luisi' }
*/

function Pessoa(customProperties) {
    return {
        name: 'Alessandra',
        lastName: 'Luisi',
        ...customProperties
    }
}

const p = Pessoa({ name: 'Custom Name', age: 40 });
console.log(p);
// { name: 'Custom Name', lastName: 'Luisi', age: 40 }