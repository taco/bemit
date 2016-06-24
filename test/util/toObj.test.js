import expect from 'expect';
import { toObj } from './../../src/util/toObj';

describe('toObj method', () => {

    it('should return undefined with given an empty value', () => {

        [undefined, null, [], {}, ''].forEach(val => {
            expect(
                toObj(val)
            ).toBe(undefined);
        });
    });

    it('should return the value passed if an object', () => {
        const val = { blurg: true, food: false };

        expect(
            toObj(val)
        ).toBe(val);
    });

    it('should return the object when passed a single string', () => {
        expect(
            toObj('blurg')
        ).toEqual({ blurg: true });
    });

    it('should convert an array to a keyed map', () => {

        expect(
            toObj(['blurg', 'food'])
        ).toEqual({ blurg: true, food: true });
    });

});
