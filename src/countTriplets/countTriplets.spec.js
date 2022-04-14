import countTriplets from './countTriplets';

describe('countTriplets', () => {
    describe('edge cases', () => {
        test('should return 0 when arr is empty', () => {
            expect(countTriplets([], 5)).toBe(0);
        });

        test('should return 0 when arr is null', () => {
            expect(countTriplets(null, 5)).toBe(0);
        });

        test('should return 0 when arr is undefined', () => {
            expect(countTriplets(undefined, 5)).toBe(0);
        });

        test('should return 0 when arr is not an array', () => {
            expect(countTriplets('abc', 5)).toBe(0);
        });

        test('should return 0 when arr is not an array of numbers', () => {
            expect(countTriplets([1, 2, 3, 'a'], 5)).toBe(0);
        });
    });

    describe('normal cases', () => {
        test.each([
            [2, [1, 4, 16, 64], 4],
            [2, [1, 2, 2, 4], 2],
            [0, [625, 125, 25, 5, 5, 1], 5],
            [6, [1, 3, 9, 9, 27, 81], 3],
            [4, [1, 5, 5, 25, 125], 5],
        ])(
            'should return %i when arr is %s and r is %i',
            (expected, arr, r) => {
                expect(countTriplets(arr, r)).toBe(expected);
            }
        );
    });
});
