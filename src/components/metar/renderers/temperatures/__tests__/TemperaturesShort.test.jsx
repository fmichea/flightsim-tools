import { mountWithStore } from 'tests/lib/mountWithStore';
import { TemperaturesShort } from 'components/metar/renderers/temperatures/TemperaturesShort';
import { TestDataTemperatures_2215_Data, TestDataTemperatures_M01M05_Data } from 'tests/data/metar/temperatures';

const setup = (data) => mountWithStore(TemperaturesShort, {
    props: { data, prettyArgs: data },
});

describe('TemperaturesShort', () => {
    test('basic value is explained', () => {
        const { compWrapper } = setup(TestDataTemperatures_2215_Data);
        expect(compWrapper().text()).toEqual(
            'Outside Air Temperature (OAT) at airport is 22°C (22) and Dew Point Temperature is 15°C (15).',
        );
    });

    test('basic value with negatives is explained', () => {
        const { compWrapper } = setup(TestDataTemperatures_M01M05_Data);
        expect(compWrapper().text()).toEqual(
            'Outside Air Temperature (OAT) at airport is -1°C (M01) and Dew Point Temperature is -5°C (M05).',
        );
    });
});
