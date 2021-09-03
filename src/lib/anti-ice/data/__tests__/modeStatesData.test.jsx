import { AntiIceModeStates } from 'lib/anti-ice/data/modeStates';
import { AntiIceModeStatesData } from 'lib/anti-ice/data/modeStatesData';

describe('modeStatesData', () => {
    test('all modeStates have data', () => {
        expect(AntiIceModeStates).toBeSetOfDataKeys();
        expect(AntiIceModeStates).toHaveDataForEachDataKeys(AntiIceModeStatesData);
    });
});
