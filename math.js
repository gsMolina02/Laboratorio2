// Función para calcular el factorial de un número
function factorial(n) {
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
        throw new TypeError('El argumento debe ser un entero no negativo');
    }
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// Función para calcular el n-ésimo número de Fibonacci
function fibonacci(n) {
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
        throw new TypeError('El argumento debe ser un entero no negativo');
    }
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = {
    factorial,
    fibonacci
};
