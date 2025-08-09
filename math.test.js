const { factorial, fibonacci } = require('./math');

describe('factorial', () => {
    test('factorial de 0 debe ser 1', () => {
        expect(factorial(0)).toBe(1);
    });
    test('factorial de 5 debe ser 120', () => {
        expect(factorial(5)).toBe(120);
    });
    test('factorial de número negativo lanza error', () => {
        expect(() => factorial(-1)).toThrow(TypeError);
    });
    test('factorial de número no entero lanza error', () => {
        expect(() => factorial(2.5)).toThrow(TypeError);
    });
});

describe('fibonacci', () => {
    test('fibonacci de 0 debe ser 0', () => {
        expect(fibonacci(0)).toBe(0);
    });
    test('fibonacci de 1 debe ser 1', () => {
        expect(fibonacci(1)).toBe(1);
    });
    test('fibonacci de 6 debe ser 8', () => {
        expect(fibonacci(6)).toBe(8);
    });
    test('fibonacci de número negativo lanza error', () => {
        expect(() => fibonacci(-3)).toThrow(TypeError);
    });
    test('fibonacci de número no entero lanza error', () => {
        expect(() => fibonacci(3.7)).toThrow(TypeError);
    });
});
