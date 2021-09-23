import { isNotNullOrUndefined } from 'lib/isNullOrUndefined';

const prefixFunctions = [
];

const parsersFunctions = [
];

const parseToken = (parser) => {
    for (let idx = 0; idx < parsersFunctions.length; idx += 1) {
        const result = parsersFunctions[idx](parser);

        if (isNotNullOrUndefined(result)) {
            parser.pushToken(result);
            return true;
        }
    }
    return false;
};

const parseNextToken = (parser) => {
    if (parseToken(parser)) {
        return;
    }

    parser.skipToken();
};

export const parseMETAR = (value) => {
    const parser = new ParserState(value);

    prefixFunctions.forEach((fn) => {
        if (!parser.hasMoreToMatch()) {
            return;
        }

        const result = fn(parser);
        if (isNotNullOrUndefined(result)) {
            parser.pushToken(result);
        }
    });

    while (parser.hasMoreToMatch()) {
        parseNextToken(parser);
    }
    return parser.tokens;
};
