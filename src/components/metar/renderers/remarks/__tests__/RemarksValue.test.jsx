import { RemarksValue } from 'components/metar/renderers/remarks/RemarksValue';
import { TestDataRemarks_Data, TestDataRemarks_Text } from 'tests/data/metar/remarks';
import { mountWithStore } from 'tests/lib/mountWithStore';

const setup = (data) => mountWithStore(RemarksValue, {
    props: { data, prettyArgs: data },
});

describe('RemarksValue', () => {
    test('simple remarks example is shown', () => {
        const { compWrapper } = setup(TestDataRemarks_Data);
        expect(compWrapper().text()).toEqual(TestDataRemarks_Text);
    });
});
