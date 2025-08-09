function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new TypeError('Ambos argumentos deben ser números');
    }
    return a + b;
}

module.exports = sum;