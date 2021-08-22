import { mountHookWithStore } from 'tests/lib/mountHookWithStore';
import { useAntiIceRecommendation } from 'lib/anti-ice/hooks/useAntiIceRecommendation';
import { AntiIceAircraftsData } from 'lib/anti-ice/data/aircraftsData';
import { AntiIceAircrafts } from 'lib/anti-ice/data/aircrafts';
import { useAntiIceOperationModeData } from 'lib/anti-ice/hooks/useAntiIceOperationModeData';
import { pick } from 'lib/pick';
import { AntiIceOperationModes } from 'lib/anti-ice/data/operationModes';
import { AntiIceModeStates } from 'lib/anti-ice/data/modeStates';
import { AntiIceSystemModes } from 'lib/anti-ice/data/systemModes';

const setup = ({ props, operationModeName } = {}) => {
    const defaultProps = {
        moisture: true,
        temperature: 0,
    };

    return mountHookWithStore(() => {
        const operationModeData = useAntiIceOperationModeData({
            antiIceAircraftData: AntiIceAircraftsData[AntiIceAircrafts.WT_CJ4],
            selectedOperationModeName: pick(operationModeName, AntiIceOperationModes.IN_FLIGHT_OPERATION),
            antiIceURLManager: null,
        });

        return useAntiIceRecommendation({
            operationModeData,
            ...defaultProps,
            ...pick(props, {}),
        });
    });
};

describe('useAntiIceRecommendation', () => {
    test('default above limit is fine', () => {
        const { getCurrentHookResult } = setup({ props: { temperature: 25 } });

        const hookResult = getCurrentHookResult();

        expect(hookResult.states).toEqual({
            [AntiIceSystemModes.CJ4_PITOT_STATIC_HEAT_ICE_MODE]: AntiIceModeStates.ON,
        });

        expect(hookResult.image).not.toBeNull();
        expect(hookResult.optionalModesOrder).toHaveLength(0);
    });

    test('without moisture is also fine', () => {
        const { getCurrentHookResult } = setup({
            props: {
                temperature: -25,
                moisture: false,
            },
        });

        const hookResult = getCurrentHookResult();

        expect(hookResult.states).toEqual({
            [AntiIceSystemModes.CJ4_PITOT_STATIC_HEAT_ICE_MODE]: AntiIceModeStates.ON,
        });
        expect(hookResult.image).not.toBeNull();
        expect(hookResult.optionalModesOrder).toHaveLength(0);
    });

    test('optional modes are also returned', () => {
        const { getCurrentHookResult } = setup({
            props: {
                temperature: -50,
            },
        });

        const hookResult = getCurrentHookResult();

        expect(hookResult.states).toEqual({
            [AntiIceSystemModes.CJ4_PITOT_STATIC_HEAT_ICE_MODE]: AntiIceModeStates.ON,
            [AntiIceSystemModes.CJ4_ENG_ONLY_ANTI_ICE_MODE]: AntiIceModeStates.OPTIONALLY_ON,
            [AntiIceSystemModes.CJ4_WING_ENG_ANTI_ICE_MODE]: AntiIceModeStates.OPTIONALLY_OFF,
        });
        expect(hookResult.image).not.toBeNull();

        expect(hookResult.optionalModesOrder).toHaveLength(1);
    });
});
