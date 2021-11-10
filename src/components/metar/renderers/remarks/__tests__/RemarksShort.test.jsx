import { RemarksShort } from 'components/metar/renderers/remarks/RemarksShort';
import { TestDataRemarks_Data } from 'tests/data/metar/remarks';
import { mountWithStore } from 'tests/lib/mountWithStore';

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
