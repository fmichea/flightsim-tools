import { NotRecognizedShort } from 'components/metar/renderers/notRecognized/NotRecognizedShort';
import { TokenTypes } from 'lib/metar/enums';
import { mountWithStore } from 'tests/lib/mountWithStore';

const setup = (data) => mountWithStore(NotRecognizedShort, {
    props: { data, prettyArgs: data },
});

describe('NotRecognizedShort', () => {
    test('no message returns empty result', () => {
        const { compWrapper } = setup({
            tokenType: TokenTypes.NOT_RECOGNIZED,
            args: ['value'],

            value: 'FOO',
        });
        expect(compWrapper().text()).toEqual('');
    });

    test('message is displayed', () => {
        const { compWrapper } = setup({
            tokenType: TokenTypes.NOT_RECOGNIZED,
            args: ['value'],

            value: 'FOO',
            message: 'Some message that so and so.',
        });
        expect(compWrapper().text()).toEqual('Some message that so and so.');
    });
});
