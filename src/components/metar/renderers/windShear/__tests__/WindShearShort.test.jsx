import { mountWithStore } from 'tests/lib/mountWithStore';
import {
    TestDataWindShear_WSALLRWY_Data,
    TestDataWindShear_WSR24_Data,
} from 'tests/data/metar/windShear';
import { WindShearShort } from 'components/metar/renderers/windShear/WindShearShort';

const setup = (data) => mountWithStore(WindShearShort, {
    props: { data, prettyArgs: data },
});

describe('WindShearShort', () => {
    test('all runways', () => {
        const { compWrapper } = setup(TestDataWindShear_WSALLRWY_Data);
        expect(compWrapper().text()).toEqual('Wind shear reported for all runways (ALL RWY).');
    });

    test('specific runway', () => {
        const { compWrapper } = setup(TestDataWindShear_WSR24_Data);
        expect(compWrapper().text()).toEqual('Wind shear reported for runway 24 (R24).');
    });
});
