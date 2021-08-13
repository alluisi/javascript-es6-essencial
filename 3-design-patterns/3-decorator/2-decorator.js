let loggedIn = false;

function callIfAuthenticated(fn) {
    return !!loggedIn && fn(); // se loggdIn retorna fn()
}

function sum(a, b) {
    return a + b;
}

console.log(callIfAuthenticated(() => sum(2, 3)));
// false

loggedIn = true;

console.log(callIfAuthenticated(() => sum(2, 3)));
// 5