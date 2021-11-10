import { act } from '@testing-library/react';

import { AntiIceAircrafts } from 'lib/anti-ice/data/aircrafts';
import { AntiIceAircraftsData } from 'lib/anti-ice/data/aircraftsData';
import { AntiIceOperationModes } from 'lib/anti-ice/data/operationModes';
import { useAntiIceOperationModeData } from 'lib/anti-ice/hooks/useAntiIceOperationModeData';
import { mountHookWithStore } from 'tests/lib/mountHookWithStore';

const setup = () => {
    const mockAntiIceURLManager = {
        changeTemperature: jest.fn(),
    };

    const result = mountHookWithStore(
        () => useAntiIceOperationModeData({
            antiIceAircraftData: AntiIceAircraftsData[AntiIceAircrafts.WORKINGTITLE_CJ4],
            selectedOperationModeName: AntiIceOperationModes.GROUND_OPERATION,
            antiIceURLManager: mockAntiIceURLManager,
        }),
    );

    return { ...result, mockAntiIceURLManager };
};

describe('useAntiIceOperationModeData', () => {
    test('general tests of the hook function', () => {
        const { getCurrentHookResult, mockAntiIceURLManager } = setup();

        const hookResult = getCurrentHookResult();

        expect(hookResult.title).toEqual('Ground Operation');
        expect(hookResult.temperature.name).toEqual('OAT');
        expect(hookResult.sliderData.min).toEqual(-60);
        expect(hookResult.sliderData.max).toEqual(35);

        act(() => { hookResult.sliderData.onChange(-40); });

        const { calls } = mockAntiIceURLManager.changeTemperature.mock;

        expect(calls).toHaveLength(1);
        expect(calls[0][0]).toEqual(-40);
    });
});
