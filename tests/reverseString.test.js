import reverseString from "../functions/reverseString";

test('reverse the string', () => {
    expect(reverseString('this')).toBe('siht');
});
test('reverse the string', () => {
    expect(reverseString('woah there')).toBe('ereht haow');
});