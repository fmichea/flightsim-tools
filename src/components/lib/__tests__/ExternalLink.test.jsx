import { mountWithStore } from 'tests/lib/mountWithStore';
import { ExternalLink } from 'components/lib/ExternalLink';
import { pick } from 'lib/pick';

const setup = (options = {}) => mountWithStore(ExternalLink, {
    props: pick(options.props, {}),
});

describe('ExternalLink', () => {
    test('link is rendered', () => {
        const title = 'Example URL';
        const url = 'https://example.com/sample-url';

        const { compWrapper } = setup({
            props: {
                href: url,
                children: title,
            },
        });

        const links = compWrapper().find('a');
        expect(links).toHaveLength(1);

        const link = links.at(0);
        expect(link.props().href).toEqual(url);
        expect(link.text()).toContain(title);
    });
});
