import { AntiIceImages } from 'lib/anti-ice/data/images';
import { AntiIceImagesData } from 'lib/anti-ice/data/imagesData';

describe('imagesData', () => {
    test('all images have data', () => {
        Object.values(AntiIceImages).forEach((keyName) => {
            expect(Object.keys(AntiIceImagesData)).toContain(keyName);
        });
    });
});
