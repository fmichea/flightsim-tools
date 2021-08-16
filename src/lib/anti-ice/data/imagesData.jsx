import { createMappingFunction } from 'lib/checklist/data/transforms';
import { AntiIceImages } from 'lib/anti-ice/data/images';

const cj4ImagesData = createMappingFunction()([
    {
        uid: AntiIceImages.CJ4_ALL_OFF,
        path: 'images/workingtitle-cj4-anti-ice/ALL_OFF.jpg',
    },
    {
        uid: AntiIceImages.CJ4_ENG_ONLY_ON,
        path: 'images/workingtitle-cj4-anti-ice/ENG_ONLY_ON.jpg',
    },
    {
        uid: AntiIceImages.CJ4_PITOT_ENG_ONLY_ON,
        path: 'images/workingtitle-cj4-anti-ice/PITOT_ENG_ONLY_ON.jpg',
    },
    {
        uid: AntiIceImages.CJ4_PITOT_ON,
        path: 'images/workingtitle-cj4-anti-ice/PITOT_ON.jpg',
    },
    {
        uid: AntiIceImages.CJ4_PITOT_WING_ENG_ON,
        path: 'images/workingtitle-cj4-anti-ice/PITOT_WING_ENG_ON.jpg',
    },
]);

export const AntiIceImagesData = Object.freeze({
    ...cj4ImagesData,
});