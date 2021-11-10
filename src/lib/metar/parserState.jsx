import { isNotNullOrUndefined, isNullOrUndefined } from 'lib/isNullOrUndefined';
import { TokenTypes } from 'lib/metar/enums';
import { pick } from 'lib/pick';

export class ParserState {
    constructor(metar) {
        this.originalMetar = metar;
        this.currentValue = metar;
        this.context = null;

        this.tokens = [];
    }

    hasMoreToMatch() {
        this.skipWhitespace();
        return this.currentValue.length !== 0;
    }

    matchAndForward(pattern) {
        const result = this.currentValue.match(new RegExp(pattern));

        if (isNullOrUndefined(result)) {
            return { matched: false };
        }

        this.currentValue = this.currentValue.substring(
            result.index + result[0].length,
        );

        return {
            matched: true,
            completeMatch: pick(result[0], '').trim(),
            groups: pick(result.groups),
        };
    }

    matchNextTokenAndForward(pattern) {
        this.skipWhitespace();

        const { matched: matched1, ...result1 } = this.matchAndForward(`^${pattern}$`);
        if (matched1) {
            return result1;
        }

        const { matched: matched2, ...result2 } = this.matchAndForward(`^${pattern}\\s`);
        if (matched2) {
            return result2;
        }

        return {};
    }

    skipWhitespace() {
        this.matchAndForward('^\\s+');
    }

    skipToken() {
        const { completeMatch } = this.matchNextTokenAndForward('[^\\s]+');

        this.pushToken({
            tokenType: TokenTypes.NOT_RECOGNIZED,
            value: completeMatch,
            message: 'Token was not recognized.',
        });
    }

    pushToken(value) {
        if (value.context !== undefined) {
            this.context = value.context;
        }

        this.tokens.push({
            context: pick(this.context),
            ...value,
        });
    }

    cleanIrrelevantCharacters() {
        const result = this.currentValue.match(new RegExp('=+$'));
        if (isNotNullOrUndefined(result)) {
            this.currentValue = this.currentValue.substring(
                0, this.currentValue.length - result[0].length,
            );
        }
    }
}
