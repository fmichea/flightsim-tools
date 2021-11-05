import { createMappingFunction } from 'lib/checklist/data/transforms';
import { ChecklistTags } from 'lib/checklist/data/tags';

const commonTagsData = createMappingFunction()([
    {
        uid: ChecklistTags.OFFICIAL,
        hidden: true,
    },
    {
        uid: ChecklistTags.NOT_IMPLEMENTED,
        hidden: true,
    },
    {
        uid: ChecklistTags.EXTENSION,
        hidden: true,
    },
    {
        uid: ChecklistTags.CJ4,
        color: '#9d0606',
    },
    {
        uid: ChecklistTags.CJ4EXT,
        color: '#080f8d',
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
        color: '#d05111',
    },
    {
        uid: ChecklistTags.CRJ7,
        color: '#000',
    },
]);

export const ChecklistTagsData = Object.freeze({
    ...commonTagsData,
});
