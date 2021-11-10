import { AntiIceAircrafts } from 'lib/anti-ice/data/aircrafts';
import { AntiIceOperationModes } from 'lib/anti-ice/data/operationModes';
import { useAntiIceCheck } from 'lib/anti-ice/hooks/useAntiIceCheck';
import { mountHookWithStore } from 'tests/lib/mountHookWithStore';

const setup = ({ aircraftName, operationModeName }) => mountHookWithStore(() => useAntiIceCheck({ aircraftName, operationModeName }));

describe('useAntiIceCheck', () => {
    test('aicraft name and operation modes are known', () => {
        const { getCurrentHookResult } = setup({
            aircraftName: AntiIceAircrafts.WORKINGTITLE_CJ4,
            operationModeName: AntiIceOperationModes.GROUND_OPERATION,
        });

        expect(getCurrentHookResult()).toEqual({
            aircraftFound: true,
            operationModeFound: true,
            selectedOperationModeName: AntiIceOperationModes.GROUND_OPERATION,
        });
    });

    test('operation mode not provided defaults to first', () => {
        const { getCurrentHookResult } = setup({
            aircraftName: AntiIceAircrafts.WORKINGTITLE_CJ4,
        });

        expect(getCurrentHookResult()).toEqual({
            aircraftFound: true,
            operationModeFound: true,
            selectedOperationModeName: AntiIceOperationModes.GROUND_OPERATION,
        });
    });

    test('operation mode not known', () => {
        const { getCurrentHookResult } = setup({
            aircraftName: AntiIceAircrafts.WORKINGTITLE_CJ4,
            operationModeName: 'wlekjwejljwe',
        });

        expect(getCurrentHookResult()).toEqual({
            aircraftFound: true,
            operationModeFound: false,
            selectedOperationModeName: null,
        });
    });

    test('aicraft not found', () => {
        const { getCurrentHookResult } = setup({
            aircraftName: 'wedjwekdjwekd',
        });

        expect(getCurrentHookResult()).toEqual({
            aircraftFound: false,
            operationModeFound: false,
            selectedOperationModeName: null,
        });
    });
});
