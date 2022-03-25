import ceasarCipher from "../functions/ceasarCipher";

test('Expect string to be ceasarCiphered to a shift of 1', () => {
    expect(ceasarCipher.coded('this')).toBe('uijt');
});

test('Expect string to be ceasarCiphered to a shift of 1', () => {
    expect(ceasarCipher.coded('this is it')).toBe('uijt jt ju');
});