import { mountWithStore } from 'tests/lib/mountWithStore';
import { Clearfix } from 'components/lib/Clearfix';
import { pick } from 'lib/pick';

const setup = (options = {}) => mountWithStore(Clearfix, {
    props: pick(options.props, {}),
});

describe('Clearfix', () => {
    test('div with float clearing is present', () => {
        const { compWrapper } = setup();

        const div = compWrapper().find('div');
        expect(div).toHaveLength(1);
        expect(div.at(0).props().className).toContain('clear: \'both\'');
    });
});
