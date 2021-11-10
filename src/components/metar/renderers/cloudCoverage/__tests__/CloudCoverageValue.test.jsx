import { CloudCoverageValue } from 'components/metar/renderers/cloudCoverage/CloudCoverageValue';
import {
    TestDataCloudDescriptor_FEW040_Data,
    TestDataCloudDescriptor_FEW040_Text,
    TestDataCloudDescriptor_NSC_Data,
    TestDataCloudDescriptor_NSC_Text,
    TestDataCloudDescriptor_OVC230TCU_Data,
    TestDataCloudDescriptor_OVC230TCU_Text,
    TestDataCloudDescriptor_TCUONLY_Data,
    TestDataCloudDescriptor_TCUONLY_Text,
} from 'tests/data/metar/cloudDescriptors';
import { mountWithStore } from 'tests/lib/mountWithStore';

const setup = (data) => mountWithStore(CloudCoverageValue, {
    props: { data, prettyArgs: data },
});

describe('CloudCoverageValue', () => {
    test('NSC is displayed properly', () => {
        const { compWrapper } = setup(TestDataCloudDescriptor_NSC_Data);
        expect(compWrapper().text()).toEqual(TestDataCloudDescriptor_NSC_Text);
    });

    test('simple value is displayed correctly', () => {
        const { compWrapper } = setup(TestDataCloudDescriptor_FEW040_Data);
        expect(compWrapper().text()).toEqual(TestDataCloudDescriptor_FEW040_Text);
    });

    test('all data info is shown', () => {
        const { compWrapper } = setup(TestDataCloudDescriptor_OVC230TCU_Data);
        expect(compWrapper().text()).toEqual(TestDataCloudDescriptor_OVC230TCU_Text);
    });

    test('towering cumulonimbus is shown', () => {
        const { compWrapper } = setup(TestDataCloudDescriptor_TCUONLY_Data);
        expect(compWrapper().text()).toEqual(TestDataCloudDescriptor_TCUONLY_Text);
    });
});
