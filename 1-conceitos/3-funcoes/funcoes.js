function getName() {
    return 'Alessandra Lamas Luisi';
}

function logFn(fn) {
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);