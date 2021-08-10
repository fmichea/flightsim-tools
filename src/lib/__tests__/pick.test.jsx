import { pick } from 'lib/pick';

describe('pick', () => {
    test('first non null value is picked', () => {
        expect(pick(null, undefined, null, 1, 'foo')).toEqual(1);
        expect(pick(null, undefined, 'blah', 1, 'foo')).toEqual('blah');
        expect(pick(true, null)).toEqual(true);
    });

    test('no value is null', () => {
        expect(pick(null, undefined)).toEqual(null);
        expect(pick()).toEqual(null);
    });
});
