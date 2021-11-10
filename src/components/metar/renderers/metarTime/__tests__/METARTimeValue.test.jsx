import { METARTimeValue } from 'components/metar/renderers/metarTime/METARTimeValue';
import { TestDataMetarPrefixes_TIME_Data, TestDataMetarPrefixes_TIME_Text } from 'tests/data/metar/metarPrefixes';
import { mountWithStore } from 'tests/lib/mountWithStore';

const setup = (data) => mountWithStore(METARTimeValue, {
    props: { data, prettyArgs: data },
});

describe('METARTimeValue', () => {
    test('time is shown as parsed', () => {
        const { compWrapper } = setup(TestDataMetarPrefixes_TIME_Data);
        expect(compWrapper().text()).toEqual(TestDataMetarPrefixes_TIME_Text);
    });
});
