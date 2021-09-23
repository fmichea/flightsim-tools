import { mountWithStore } from 'tests/lib/mountWithStore';
import {
    TestDataMetarPrefixes_AUTO_Data,
    TestDataMetarPrefixes_AUTO_Text,
    TestDataMetarPrefixes_COR_Data,
    TestDataMetarPrefixes_COR_Text,
    TestDataMetarPrefixes_METAR_Data,
    TestDataMetarPrefixes_METAR_Text,
} from 'tests/data/metar/metarPrefixes';
import { PrefixValue } from 'components/metar/renderers/prefix/PrefixValue';

const setup = (data) => mountWithStore(PrefixValue, {
    props: { data, prettyArgs: data },
});

describe('PrefixValue', () => {
    test('value for METAR/SPECI is displayed', () => {
        const { compWrapper } = setup(TestDataMetarPrefixes_METAR_Data);
        expect(compWrapper().text()).toEqual(TestDataMetarPrefixes_METAR_Text);
    });

    test('value AUTO is displayed', () => {
        const { compWrapper } = setup(TestDataMetarPrefixes_AUTO_Data);
        expect(compWrapper().text()).toEqual(TestDataMetarPrefixes_AUTO_Text);
    });

    test('value COR is displayed', () => {
        const { compWrapper } = setup(TestDataMetarPrefixes_COR_Data);
        expect(compWrapper().text()).toEqual(TestDataMetarPrefixes_COR_Text);
    });
});
