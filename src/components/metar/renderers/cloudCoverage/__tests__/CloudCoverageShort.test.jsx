import { CloudCoverageShort } from 'components/metar/renderers/cloudCoverage/CloudCoverageShort';
import {
    TestDataCloudDescriptor_BKN070CB_Data, TestDataCloudDescriptor_CLR_Data,
    TestDataCloudDescriptor_FEW040_Data,
    TestDataCloudDescriptor_NCD_Data,
    TestDataCloudDescriptor_NSC_Data,
    TestDataCloudDescriptor_OVC230TCU_Data,
    TestDataCloudDescriptor_OVCBelow_Data,
    TestDataCloudDescriptor_SCT120_Data, TestDataCloudDescriptor_SKC_Data, TestDataCloudDescriptor_TCUONLY_Data,
} from 'tests/data/metar/cloudDescriptors';
import { mountWithStore } from 'tests/lib/mountWithStore';

const setup = (data) => mountWithStore(CloudCoverageShort, {
    props: {
        prettyArgs: data,
        data,
    },
});

describe('CloudCoverageShort', () => {
    test('NSC is parsed properly', () => {
        const { compWrapper } = setup(TestDataCloudDescriptor_NSC_Data);
        expect(compWrapper().text()).toEqual(
            'No significant cloud coverage was reported (NSC = Nil Significant Cloud).',
        );
    });

    test('NCD is parsed properly', () => {
        const { compWrapper } = setup(TestDataCloudDescriptor_NCD_Data);
        expect(compWrapper().text()).toEqual(
            'Automatic observing station was unable to report cloud coverage (NCD).',
        );
    });

    test('Simple case with few clouds at 4000', () => {
        const { compWrapper } = setup(TestDataCloudDescriptor_FEW040_Data);
        expect(compWrapper().text()).toEqual(
            'A few clouds covering up to 25% of the sky (FEW) was reported at altitude of 4000 ft (040).',
        );
    });

    test('Scattered clouds at 12000, with unknown type', () => {
        const { compWrapper } = setup(TestDataCloudDescriptor_SCT120_Data);
        expect(compWrapper().text()).toEqual(
            'Scattered clouds covering 25 to 50% of the sky (SCT) was reported at altitude of '
            + '12000 ft (120). Cloud type could not be described by automated system (///).',
        );
    });

    test('Broken at 7000 , cumulonimbus described', () => {
        const { compWrapper } = setup(TestDataCloudDescriptor_BKN070CB_Data);
        expect(compWrapper().text()).toEqual(
            'Broken clouds covering more than 50% of the sky (BKN) was reported at altitude of '
            + '7000 ft (070). Cumulonimbuses are reported (CB).',
        );
    });

    test('Overcast at 230, towering cumulonimbus described', () => {
        const { compWrapper } = setup(TestDataCloudDescriptor_OVC230TCU_Data);
        expect(compWrapper().text()).toEqual(
            'Complete coverage of the sky by clouds (OVC) was reported at altitude of '
            + '23000 ft (230). Towering Cumulonimbuses are reported (TCU).',
        );
    });

    test('Overcast below the reporting station', () => {
        const { compWrapper } = setup(TestDataCloudDescriptor_OVCBelow_Data);
        expect(compWrapper().text()).toEqual(
            'Complete coverage of the sky by clouds (OVC) was reported below the reporting station (///).',
        );
    });

    test('Clear skies', () => {
        const { compWrapper } = setup(TestDataCloudDescriptor_CLR_Data);
        expect(compWrapper().text()).toEqual('There are no visible clouds below 12000 ft (CLR).');
    });

    test('Clear skies 2', () => {
        const { compWrapper } = setup(TestDataCloudDescriptor_SKC_Data);
        expect(compWrapper().text()).toEqual('Skies are clear (SKC).');
    });

    test('towering cb', () => {
        const { compWrapper } = setup(TestDataCloudDescriptor_TCUONLY_Data);
        expect(compWrapper().text()).toEqual('Towering Cumulonimbuses are reported (TCU).');
    });
});
