import { WindShearValue } from 'components/metar/renderers/windShear/WindShearValue';
import {
    TestDataWindShear_WSALLRWY_Data,
    TestDataWindShear_WSR24_Data,
} from 'tests/data/metar/windShear';
import { mountWithStore } from 'tests/lib/mountWithStore';

const setup = (data) => mountWithStore(WindShearValue, {
    props: { data, prettyArgs: data },
});

describe('WindShearValue', () => {
    test('all runways', () => {
        const { compWrapper } = setup(TestDataWindShear_WSALLRWY_Data);
        expect(compWrapper().text()).toEqual('WSALL RWY');
    });

    test('specific runway', () => {
        const { compWrapper } = setup(TestDataWindShear_WSR24_Data);
        expect(compWrapper().text()).toEqual('WSR24');
    });
});
