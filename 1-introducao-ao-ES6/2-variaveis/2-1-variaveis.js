var test = 'example';

(() => {
    console.log(`Valor dentro da função "${test}"`);

    if (true) {
        var test = 'example';
        console.log(`Valor dentro do if "${test}"`);
    }

    console.log(`Valor após execução do if "${test}"`);
})();