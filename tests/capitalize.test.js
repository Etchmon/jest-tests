import capitalize from '../functions/capitalize';

test('Capitalizes first letter of string', () => {
    expect(capitalize('this')).toBe('This');
});
test('Capitalizes first letter of string', () => {
    expect(capitalize('woah there!')).toBe('Woah there!');
});