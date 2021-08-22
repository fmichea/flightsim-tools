import { AntiIceOperationModes } from 'lib/anti-ice/data/operationModes';
import { AntiIceOperationModesData } from 'lib/anti-ice/data/operationModesData';

describe('checklistsData', () => {
    test('all checklists have data', () => {
        Object.values(AntiIceOperationModes).forEach((keyName) => {
            expect(Object.keys(AntiIceOperationModesData)).toContain(keyName);
        });
    });
});
