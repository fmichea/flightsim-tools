import { mountWithStore } from 'tests/lib/mountWithStore';
import { TestDataRemarks_Data } from 'tests/data/metar/remarks';
import { RemarksShort } from 'components/metar/renderers/remarks/RemarksShort';

const setup = (data) => mountWithStore(RemarksShort, {
    props: { data, prettyArgs: data },
});

describe('RemarksShort', () => {
    test('simple remarks example is shown', () => {
        const { compWrapper } = setup(TestDataRemarks_Data);
        expect(compWrapper().text()).toEqual(
            'Remarks added and only defined on national level. These are not currently parsed.',
        );
    });
});
