import { createTransformedMapping } from 'lib/checklist/data/transforms';
import { AntiIceSystemModes } from 'lib/anti-ice/data/systemModes';
import { AntiIceTags } from 'lib/anti-ice/data/tags';

const cj4SystemModesData = createTransformedMapping()([
    {
        uid: AntiIceSystemModes.CJ4_WING_ENG_ANTI_ICE_MODE,
        title: 'Wing/Engine Anti-Ice',
    },
    {
        uid: AntiIceSystemModes.CJ4_ENG_ONLY_ANTI_ICE_MODE,
        title: 'Engine Only Anti-Ice',
    },
    {
        uid: AntiIceSystemModes.CJ4_TAIL_DEICE_ANTI_ICE_MODE,
        title: 'Tail Deice',
        tags: [AntiIceTags.NOT_IMPLEMENTED],
    },
    {
        uid: AntiIceSystemModes.CJ4_PITOT_STATIC_HEAT_ANTI_ICE_MODE,
        title: 'Pitot / Static Heat',
    },
]);

export const AntiIceSystemModesData = Object.freeze({
    ...cj4SystemModesData,
});
