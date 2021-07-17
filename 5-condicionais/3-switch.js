/**
 * switch (expressão) {
 *    case valor1:
 *       [break;]
 *    case valueN:
 *       [breal;]
 * 
 *    default:
 *       [break;]
 * }
 */

const fruit = 'pera';

switch (fruit) {
    case 'banana':
    case 'melancia':
        console.log('R$ 3,00 / kg');
        break;
    case 'mamão':
    case 'pera':
        console.log('R$ 4,00 / kg');
        break;
    default:
        console.log('Produto não existe no estoque.');
        break;
};