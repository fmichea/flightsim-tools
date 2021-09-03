import { AntiIceSystemModes } from 'lib/anti-ice/data/systemModes';
import { AntiIceSystemModesData } from 'lib/anti-ice/data/systemModesData';

describe('checklistsData', () => {
    test('all checklists have data', () => {
        expect(AntiIceSystemModes).toBeSetOfDataKeys();
        expect(AntiIceSystemModes).toHaveDataForEachDataKeys(AntiIceSystemModesData);
    });
});
