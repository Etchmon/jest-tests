const CeasarCipher = (() => {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const shift = 1

    const cipherLetter = (letter) => {
        if (letter === ' ') return ' ';
        const num = alphabet.indexOf(letter);
        return alphabet[num + shift];
    }

    const coded = (string) => {
        const arr = string.split('')
        console.log(arr);
        const newArr = []

        arr.forEach(letter => {
            let cipherL = cipherLetter(letter);
            newArr.push(cipherL);
        });

        return newArr.join('')
    }

    return { coded };
})();

export default CeasarCipher;