import { PrefixTitle } from 'components/metar/renderers/prefix/PrefixTitle';
import {
    TestDataMetarPrefixes_AUTO_Data,
    TestDataMetarPrefixes_COR_Data,
    TestDataMetarPrefixes_METAR_Data,
} from 'tests/data/metar/metarPrefixes';
import { mountWithStore } from 'tests/lib/mountWithStore';

const setup = (data) => mountWithStore(PrefixTitle, {
    props: { data, prettyArgs: data },
});

describe('PrefixTitle', () => {
    test('title for METAR/SPECI is described', () => {
        const { compWrapper } = setup(TestDataMetarPrefixes_METAR_Data);
        expect(compWrapper().text()).toEqual('METAR Prefix');
    });

    test('AUTO is described', () => {
        const { compWrapper } = setup(TestDataMetarPrefixes_AUTO_Data);
        expect(compWrapper().text()).toEqual('Automated Weather Report');
    });

    test('COR is described', () => {
        const { compWrapper } = setup(TestDataMetarPrefixes_COR_Data);
        expect(compWrapper().text()).toEqual('Correction');
    });
});
