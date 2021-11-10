import { TemperaturesValue } from 'components/metar/renderers/temperatures/TemperaturesValue';
import {
    TestDataTemperatures_2215_Data,
    TestDataTemperatures_2215_Text,
    TestDataTemperatures_M01M05_Data,
    TestDataTemperatures_M01M05_Text,
} from 'tests/data/metar/temperatures';
import { mountWithStore } from 'tests/lib/mountWithStore';

const setup = (data) => mountWithStore(TemperaturesValue, {
    props: { data, prettyArgs: data },
});

describe('TemperaturesValue', () => {
    test('basic value is explained', () => {
        const { compWrapper } = setup(TestDataTemperatures_2215_Data);
        expect(compWrapper().text()).toEqual(TestDataTemperatures_2215_Text);
    });

    test('basic value with negatives is explained', () => {
        const { compWrapper } = setup(TestDataTemperatures_M01M05_Data);
        expect(compWrapper().text()).toEqual(TestDataTemperatures_M01M05_Text);
    });
});
