import { AntiIceAircraftsData } from 'lib/anti-ice/data/aircraftsData';
import { AntiIceAircrafts } from 'lib/anti-ice/data/aircrafts';

describe('aircraftsData', () => {
    test('all aircrafts have data', () => {
        Object.values(AntiIceAircrafts).forEach((keyName) => {
            expect(Object.keys(AntiIceAircraftsData)).toContain(keyName);
        });
    });
});
