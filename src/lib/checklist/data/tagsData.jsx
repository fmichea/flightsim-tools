import { ChecklistTags } from 'lib/checklist/data/tags';
import { createTransformedMapping } from 'lib/checklist/data/transforms';

const commonTagsData = createTransformedMapping()([
    {
        uid: ChecklistTags.OFFICIAL,
        hidden: true,
    },
    {
        uid: ChecklistTags.NOT_IMPLEMENTED,
        hidden: true,
    },
    {
        uid: ChecklistTags.FFOTD,
        hidden: true,
    },
    {
        uid: ChecklistTags.IN_MEMORY_ITEM,
        title: 'MEM',
        color: '#d36a15',
    },
    {
        uid: ChecklistTags.EXTENSION,
        title: 'EXT',
        color: '#080f8d',
    },
    {
        uid: ChecklistTags.CJ4,
        color: '#9d0606',
    },
    {
        uid: ChecklistTags.C172,
        color: '#20603c',
    },
    {
        uid: ChecklistTags.C172_STEAM,
        title: 'Steam',
        color: '#43a0da',
    },
    {
        uid: ChecklistTags.C172_G1000,
        title: 'G1000',
        color: '#306a8d',
    },
    {
        uid: ChecklistTags.VATSIM,
        color: '#cbab00',
    },
    {
        uid: ChecklistTags.SIMSETUP,
        color: '#7e2fd3',
    },
    {
        uid: ChecklistTags.CRJ,
        color: '#000',
    },
    {
        uid: ChecklistTags.NAV,
        color: '#fa1d93',
    },
    {
        uid: ChecklistTags.A32NX,
        color: '#00C2CB',
    },
]);

export const ChecklistTagsData = Object.freeze({
    ...commonTagsData,
});
