import { AntiIceModeStates } from 'lib/anti-ice/data/modeStates';
import { AntiIceModeStatesData } from 'lib/anti-ice/data/modeStatesData';

describe('modeStatesData', () => {
    test('all modeStates have data', () => {
        Object.values(AntiIceModeStates).forEach((keyName) => {
            expect(Object.keys(AntiIceModeStatesData)).toContain(keyName);
        });
    });
});
