import { AntiIceAircrafts } from 'lib/anti-ice/data/aircrafts';
import { useAntiIce } from 'lib/anti-ice/hooks/useAntiIce';
import { mountHookWithStore } from 'tests/lib/mountHookWithStore';

const setup = () => mountHookWithStore(
    () => useAntiIce({
        aircraftName: AntiIceAircrafts.WORKINGTITLE_CJ4,
        selectedOperationModeName: null,
        moisture: false,
        temperature: 10,
        antiIceURLManager: null,
    }),
);

describe('useAntiIce', () => {
    test('overall test that things are piped properly', () => {
        const { getCurrentHookResult } = setup();

        const hookResult = getCurrentHookResult();
        expect(hookResult.antiIceAircraftData).toBeDefined();
        expect(hookResult.operationModeData).toBeDefined();
        expect(hookResult.menuItems).toBeDefined();
        expect(hookResult.setMoisture).toBeDefined();
        expect(hookResult.recommendations).toBeDefined();

        // FIXME: test more things.
    });
});
