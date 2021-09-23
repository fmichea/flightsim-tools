import { mountWithStore } from 'tests/lib/mountWithStore';
import { PrevailingVisibilityShort } from 'components/metar/renderers/prevailingVisibility/PrevailingVisibilityShort';
import {
    TestDataPrevailingVisibility_10KM_Data,
    TestDataPrevailingVisibility_10SM_Data,
    TestDataPrevailingVisibility_1SixteenthSM_Data,
    TestDataPrevailingVisibility_2HalfSM_Data,
    TestDataPrevailingVisibility_4500_Data,
    TestDataPrevailingVisibility_4500NW_Data,
    TestDataPrevailingVisibility_9999_Data,
    TestDataPrevailingVisibility_CAVOK_Data,
    TestDataPrevailingVisibility_MISSING_Data,
} from 'tests/data/metar/prevailingVisibility';

const setup = (data) => mountWithStore(PrevailingVisibilityShort, {
    props: { data, prettyArgs: data },
});

describe('PrevailingVisibilityShort', () => {
    test('CAVOK is explained', () => {
        const { compWrapper } = setup(TestDataPrevailingVisibility_CAVOK_Data);
        expect(compWrapper().text()).toEqual(
            'Horizontal visibility is at least 10 kilometers, with no clouds below '
            + '1500 meters and no significant weather phenomena (CAVOK).',
        );
    });

    test('missing value is explained', () => {
        const { compWrapper } = setup(TestDataPrevailingVisibility_MISSING_Data);
        expect(compWrapper().text()).toEqual(
            'Horizontal visibility is missing or cannot be assessed (////).',
        );
    });

    test('four digits value is displayed', () => {
        const { compWrapper } = setup(TestDataPrevailingVisibility_4500_Data);
        expect(compWrapper().text()).toEqual('Horizontal visibility is 4500 meters (4500).');
    });

    test('four digits value with direction is displayed', () => {
        const { compWrapper } = setup(TestDataPrevailingVisibility_4500NW_Data);
        expect(compWrapper().text()).toEqual(
            'Horizontal visibility coming from the north-west (NW) is 4500 meters (4500).',
        );
    });

    test('four digits 9999 (10 km) is displayed', () => {
        const { compWrapper } = setup(TestDataPrevailingVisibility_9999_Data);
        expect(compWrapper().text()).toEqual('Horizontal visibility is 10 kilometers (9999).');
    });

    test('us statute mile simple displayed', () => {
        const { compWrapper } = setup(TestDataPrevailingVisibility_10SM_Data);
        expect(compWrapper().text()).toEqual('Horizontal visibility is 10 miles (10).');
    });

    test('us statute mile with fraction displayed', () => {
        const { compWrapper } = setup(TestDataPrevailingVisibility_2HalfSM_Data);
        expect(compWrapper().text()).toEqual('Horizontal visibility is 2.5 miles (2 1/2).');
    });

    test('us statute mile just fraction displayed', () => {
        const { compWrapper } = setup(TestDataPrevailingVisibility_1SixteenthSM_Data);
        expect(compWrapper().text()).toEqual('Horizontal visibility is 0.0625 miles (1/16).');
    });

    test('km notation is displayed', () => {
        const { compWrapper } = setup(TestDataPrevailingVisibility_10KM_Data);
        expect(compWrapper().text()).toEqual('Horizontal visibility is 10 kilometers (10).');
    });
});
