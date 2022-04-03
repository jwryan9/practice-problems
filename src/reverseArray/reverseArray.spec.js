import Chance from 'chance';

import reverseArray from './reverseArray';

const chance = new Chance();

describe('reverseArray', () => {
    it('should return an array containing the same values in reverse order', () => {
        const input = chance.n(chance.integer, chance.d6());
        const expected = [...input].reverse();

        expect(reverseArray(input)).toStrictEqual(expected);
    });
});
