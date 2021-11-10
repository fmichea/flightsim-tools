import { isNotNullOrUndefined, isNullOrUndefined } from 'lib/isNullOrUndefined';
import { TokenTypes } from 'lib/metar/enums';
import { ParserState } from 'lib/metar/parserState';

describe('ParserState', () => {
    describe('hasMoreToMatch', () => {
        test('no more data present is false', () => {
            const parser = new ParserState('     \n\n   ');
            expect(parser.hasMoreToMatch()).toBeFalsy();
        });

        test('some data is present', () => {
            const parser = new ParserState('FOO BAR');
            expect(parser.hasMoreToMatch()).toBeTruthy();
        });

        test('still some data present after whitespace', () => {
            const parser = new ParserState('     \n\n   FOO    BAR');
            expect(parser.hasMoreToMatch()).toBeTruthy();
        });
    });

    describe('skipWhitespace', () => {
        test('no whitespace is left alone', () => {
            const parser = new ParserState('FOO BAR');
            parser.skipWhitespace();
            expect(parser.currentValue).toEqual('FOO BAR');
        });

        test('whitespace is skipped until first non-space character', () => {
            const parser = new ParserState('     \n \n FOO BAR  \n');
            parser.skipWhitespace();
            expect(parser.currentValue).toEqual('FOO BAR  \n');
        });
    });

    describe('pushToken', () => {
        test('tokens are added internally', () => {
            const parser = new ParserState('');

            expect(parser.tokens).toEqual([]);
            parser.pushToken({ tokenType: TokenTypes.NOT_RECOGNIZED });
            expect(parser.tokens).toEqual([
                { context: null, tokenType: TokenTypes.NOT_RECOGNIZED },
            ]);
        });
    });

    describe('skipToken', () => {
        test('the next text is skipped and a not-recognized token is added', () => {
            const parser = new ParserState('FOO BAR');

            expect(parser.tokens).toEqual([]);

            parser.skipToken();

            expect(parser.tokens).toEqual([
                {
                    tokenType: TokenTypes.NOT_RECOGNIZED,
                    context: null,

                    value: 'FOO',
                    message: 'Token was not recognized.',
                },
            ]);
            expect(parser.currentValue).toEqual('BAR');
        });
    });

    describe('matchNextTokenAndForward', () => {
        test('no match returns an empty dict', () => {
            const parser = new ParserState('FOO12 BAR');

            // Not a match at all.
            const { completeMatch: completeMatch1 } = parser.matchNextTokenAndForward('BAR');
            expect(isNullOrUndefined(completeMatch1)).toBeTruthy();

            // Does not match exactly because of the digits finishing the value. Not a whole match.
            const { completeMatch: completeMatch2 } = parser.matchNextTokenAndForward('FOO');
            expect(isNullOrUndefined(completeMatch2)).toBeTruthy();
        });

        test('matching works and completeMatch/groups are returned', () => {
            const parser = new ParserState('FOO12 BAR');

            const { completeMatch, groups } = parser.matchNextTokenAndForward('FOO(?<value>[0-9]+)');
            expect(isNotNullOrUndefined(completeMatch)).toBeTruthy();
            expect(completeMatch).toEqual('FOO12');

            expect(isNotNullOrUndefined(groups)).toBeTruthy();
            expect(groups.value).toEqual('12');

            expect(parser.currentValue).toEqual('BAR');
        });

        test('matching works also when on the end', () => {
            const parser = new ParserState('FOO12');

            const { completeMatch, groups } = parser.matchNextTokenAndForward('FOO(?<value>[0-9]+)');
            expect(isNotNullOrUndefined(completeMatch)).toBeTruthy();
            expect(completeMatch).toEqual('FOO12');

            expect(isNotNullOrUndefined(groups)).toBeTruthy();
            expect(groups.value).toEqual('12');

            expect(parser.currentValue).toEqual('');
        });
    });
});
