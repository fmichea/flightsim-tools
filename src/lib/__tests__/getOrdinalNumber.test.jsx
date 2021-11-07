import { getOrdinalNumber } from 'lib/numbers';

describe('getOrdinalNumber', () => {
    const tests = [
        { value: 1, expected: '1st' },
        { value: 2, expected: '2nd' },
        { value: 3, expected: '3rd' },
        { value: 4, expected: '4th' },
        { value: 5, expected: '5th' },
        { value: 10, expected: '10th' },
        { value: 11, expected: '11th' },
        { value: 12, expected: '12th' },
        { value: 13, expected: '13th' },
        { value: 14, expected: '14th' },
        { value: 21, expected: '21st' },
        { value: 22, expected: '22nd' },
        { value: 23, expected: '23rd' },
        { value: 24, expected: '24th' },
        { value: 25, expected: '25th' },
        { value: 110, expected: '110th' },
        { value: 111, expected: '111th' },
        { value: 112, expected: '112th' },
        { value: 113, expected: '113th' },
        { value: 114, expected: '114th' },
        { value: 121, expected: '121st' },
        { value: 122, expected: '122nd' },
        { value: 123, expected: '123rd' },
        { value: 124, expected: '124th' },
        { value: 125, expected: '125th' },
    ];

    tests.forEach((tt) => {
        test(`${tt.value} is parsed to ${tt.expected}`, () => {
            expect(getOrdinalNumber(tt.value)).toEqual(tt.expected);
        });
    });
});
