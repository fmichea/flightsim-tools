import { AntiIceOperationModes } from 'lib/anti-ice/data/operationModes';
import { AntiIceOperationModesData } from 'lib/anti-ice/data/operationModesData';

describe('checklistsData', () => {
    test('all checklists have data', () => {
        expect(AntiIceOperationModes).toBeSetOfDataKeys();
        expect(AntiIceOperationModes).toHaveDataForEachDataKeys(AntiIceOperationModesData);
    });
});
