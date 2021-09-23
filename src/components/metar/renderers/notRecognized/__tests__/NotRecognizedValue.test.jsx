import { mountWithStore } from 'tests/lib/mountWithStore';
import { NotRecognizedValue } from 'components/metar/renderers/notRecognized/NotRecognizedValue';
import { TokenTypes } from 'lib/metar/enums';

const setup = (data) => mountWithStore(NotRecognizedValue, {
    props: { data, prettyArgs: data },
});

describe('NotRecognizedValue', () => {
    test('value is displayed', () => {
        const { compWrapper } = setup({
            tokenType: TokenTypes.NOT_RECOGNIZED,
            args: ['value'],
            value: 'FOO',
        });
        expect(compWrapper().text()).toEqual('FOO');
    });
});
