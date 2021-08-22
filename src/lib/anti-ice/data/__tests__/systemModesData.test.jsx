import { AntiIceSystemModes } from 'lib/anti-ice/data/systemModes';
import { AntiIceSystemModesData } from 'lib/anti-ice/data/systemModesData';

describe('checklistsData', () => {
    test('all checklists have data', () => {
        Object.values(AntiIceSystemModes).forEach((keyName) => {
            expect(Object.keys(AntiIceSystemModesData)).toContain(keyName);
        });
    });
});
