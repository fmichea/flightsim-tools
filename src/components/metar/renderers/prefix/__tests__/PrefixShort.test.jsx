import { mountWithStore } from 'tests/lib/mountWithStore';
import { PrefixShort } from 'components/metar/renderers/prefix/PrefixShort';
import {
    TestDataMetarPrefixes_AUTO_Data,
    TestDataMetarPrefixes_COR_Data,
    TestDataMetarPrefixes_METAR_Data,
} from 'tests/data/metar/metarPrefixes';

const setup = (data) => mountWithStore(PrefixShort, {
    props: { data, prettyArgs: data },
});

describe('PrefixShort', () => {
    test('prefix for METAR/SPECI is described', () => {
        const { compWrapper } = setup(TestDataMetarPrefixes_METAR_Data);
        expect(compWrapper().text()).toEqual('Optional prefix prepended to METAR data.');
    });

    test('AUTO is described', () => {
        const { compWrapper } = setup(TestDataMetarPrefixes_AUTO_Data);
        expect(compWrapper().text()).toEqual('This weather report was generated by automated systems.');
    });

    test('COR is described', () => {
        const { compWrapper } = setup(TestDataMetarPrefixes_COR_Data);
        expect(compWrapper().text()).toEqual('This weather report is a correction of a previous report.');
    });
});