import { AntiIceAircrafts } from 'lib/anti-ice/data/aircrafts';
import { AntiIceAircraftsData } from 'lib/anti-ice/data/aircraftsData';

describe('aircraftsData', () => {
    test('all aircrafts have data', () => {
        expect(AntiIceAircrafts).toBeSetOfDataKeys();
        expect(AntiIceAircrafts).toHaveDataForEachDataKeys(AntiIceAircraftsData);
    });
});
