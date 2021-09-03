import { AntiIceImages } from 'lib/anti-ice/data/images';
import { AntiIceImagesData } from 'lib/anti-ice/data/imagesData';

describe('imagesData', () => {
    test('all images have data', () => {
        expect(AntiIceImages).toBeSetOfDataKeys();
        expect(AntiIceImages).toHaveDataForEachDataKeys(AntiIceImagesData);
    });
});
