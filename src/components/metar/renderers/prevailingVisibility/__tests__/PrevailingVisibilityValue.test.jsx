import { mountWithStore } from 'tests/lib/mountWithStore';
import { PrevailingVisibilityValue } from 'components/metar/renderers/prevailingVisibility/PrevailingVisibilityValue';
import {
    TestDataPrevailingVisibility_10KM_Data,
    TestDataPrevailingVisibility_10KM_Text,
    TestDataPrevailingVisibility_10SM_Data,
    TestDataPrevailingVisibility_10SM_Text,
    TestDataPrevailingVisibility_1SixteenthSM_Data,
    TestDataPrevailingVisibility_1SixteenthSM_Text,
    TestDataPrevailingVisibility_2HalfSM_Data,
    TestDataPrevailingVisibility_2HalfSM_Text,
    TestDataPrevailingVisibility_4500_Data,
    TestDataPrevailingVisibility_4500_Text,
    TestDataPrevailingVisibility_4500NW_Data,
    TestDataPrevailingVisibility_4500NW_Text,
    TestDataPrevailingVisibility_9999_Data,
    TestDataPrevailingVisibility_9999_Text,
    TestDataPrevailingVisibility_CAVOK_Data,
    TestDataPrevailingVisibility_CAVOK_Text,
    TestDataPrevailingVisibility_MISSING_Data,
    TestDataPrevailingVisibility_MISSING_Text,
} from 'tests/data/metar/prevailingVisibility';

const setup = (data) => mountWithStore(PrevailingVisibilityValue, {
    props: { data, prettyArgs: data },
});

describe('PrevailingVisibilityValue', () => {
    test('CAVOK is explained', () => {
        const { compWrapper } = setup(TestDataPrevailingVisibility_CAVOK_Data);
        expect(compWrapper().text()).toEqual(TestDataPrevailingVisibility_CAVOK_Text);
    });

    test('missing value is explained', () => {
        const { compWrapper } = setup(TestDataPrevailingVisibility_MISSING_Data);
        expect(compWrapper().text()).toEqual(TestDataPrevailingVisibility_MISSING_Text);
    });

    test('four digits value is displayed', () => {
        const { compWrapper } = setup(TestDataPrevailingVisibility_4500_Data);
        expect(compWrapper().text()).toEqual(TestDataPrevailingVisibility_4500_Text);
    });

    test('four digits value with direction is displayed', () => {
        const { compWrapper } = setup(TestDataPrevailingVisibility_4500NW_Data);
        expect(compWrapper().text()).toEqual(TestDataPrevailingVisibility_4500NW_Text);
    });

    test('four digits 9999 (10 km) is displayed', () => {
        const { compWrapper } = setup(TestDataPrevailingVisibility_9999_Data);
        expect(compWrapper().text()).toEqual(TestDataPrevailingVisibility_9999_Text);
    });

    test('us statute mile simple displayed', () => {
        const { compWrapper } = setup(TestDataPrevailingVisibility_10SM_Data);
        expect(compWrapper().text()).toEqual(TestDataPrevailingVisibility_10SM_Text);
    });

    test('us statute mile with fraction displayed', () => {
        const { compWrapper } = setup(TestDataPrevailingVisibility_2HalfSM_Data);
        expect(compWrapper().text()).toEqual(TestDataPrevailingVisibility_2HalfSM_Text);
    });

    test('us statute mile just fraction displayed', () => {
        const { compWrapper } = setup(TestDataPrevailingVisibility_1SixteenthSM_Data);
        expect(compWrapper().text()).toEqual(TestDataPrevailingVisibility_1SixteenthSM_Text);
    });

    test('km notation is displayed', () => {
        const { compWrapper } = setup(TestDataPrevailingVisibility_10KM_Data);
        expect(compWrapper().text()).toEqual(TestDataPrevailingVisibility_10KM_Text);
    });
});
