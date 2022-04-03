import alternatingCharacters from './alternatingCharacters';

describe('alternatingCharacters', () => {
    test.each([
        [3, 'AAAA'],
        [4, 'BBBBB'],
        [0, 'ABABABAB'],
        [0, 'BABABA'],
        [4, 'AAABBB'],
    ])('should return %i for %s', (expected, input) => {
        expect(alternatingCharacters(input)).toStrictEqual(expected);
    });
});
