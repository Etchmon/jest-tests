import Calc from "../functions/calculator";

test('Add 2 numbers together', () => {
    expect(Calc.add(2, 4)).toBe(6);
});
test('Subtract 2 numbers together', () => {
    expect(Calc.subtract(2, 4)).toBe(-2);
});
test('Divid 2 numbers together', () => {
    expect(Calc.divide(4, 2)).toBe(2);
});
test('Multiply 2 numbers together', () => {
    expect(Calc.multiply(2, 4)).toBe(8);
});