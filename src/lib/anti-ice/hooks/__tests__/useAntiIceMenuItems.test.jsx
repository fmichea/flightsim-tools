import { mountHookWithStore } from 'tests/lib/mountHookWithStore';
import { useAntiIceMenuItems } from 'lib/anti-ice/hooks/useAntiIceMenuItems';
import { AntiIceAircraftsData } from 'lib/anti-ice/data/aircraftsData';
import { AntiIceAircrafts } from 'lib/anti-ice/data/aircrafts';
import { AntiIceOperationModes } from 'lib/anti-ice/data/operationModes';
import { act } from '@testing-library/react';

const setup = () => {
    const mockAntiIceURLManager = {
        changeOperationMode: jest.fn(),
    };

    const result = mountHookWithStore(() => useAntiIceMenuItems({
        antiIceURLManager: mockAntiIceURLManager,
        antiIceAircraftData: AntiIceAircraftsData[AntiIceAircrafts.WORKINGTITLE_CJ4],
    }));

    return { ...result, mockAntiIceURLManager };
};

describe('useAntiIceMenuItems', () => {
    test('menu items have a selector', () => {
        const { getCurrentHookResult, mockAntiIceURLManager } = setup();

        const items = getCurrentHookResult();

        expect(items).toHaveLength(2);
        expect(items[0].uid).toEqual(AntiIceOperationModes.GROUND_OPERATION);

        act(() => { items[0].selectMenu(); });

        const { calls } = mockAntiIceURLManager.changeOperationMode.mock;

        expect(calls).toHaveLength(1);
        expect(calls[0][0]).toEqual(AntiIceOperationModes.GROUND_OPERATION);
    });
});
