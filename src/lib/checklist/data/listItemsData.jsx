import { C172ChecklistItemsData } from 'lib/checklist/data/listItemsData/c172';
import { C172G1000ChecklistItemsData } from 'lib/checklist/data/listItemsData/c172g1000';
import { C172SteamChecklistItemsData } from 'lib/checklist/data/listItemsData/c172steam';
import { CJ4ChecklistItemsData } from 'lib/checklist/data/listItemsData/cj4';
import { CJ4ExtChecklistItemsData } from 'lib/checklist/data/listItemsData/cj4ext';
import { CRJ7ChecklistItemsData } from 'lib/checklist/data/listItemsData/crj7';
import { CRJ7ExtChecklistItemsData } from 'lib/checklist/data/listItemsData/crj7ext';
import { SimulatorSetupChecklistItemsData } from 'lib/checklist/data/listItemsData/simulatorSetup';
import { VATSIMChecklistItemsData } from 'lib/checklist/data/listItemsData/vatsim';
import { ChecklistTags } from 'lib/checklist/data/tags';
import { objectMap } from 'lib/objects';

export const ChecklistItemsData = Object.freeze({
    ...CJ4ChecklistItemsData,
    ...CJ4ExtChecklistItemsData,
    ...C172ChecklistItemsData,
    ...C172SteamChecklistItemsData,
    ...C172G1000ChecklistItemsData,
    ...CRJ7ChecklistItemsData,
    ...CRJ7ExtChecklistItemsData,
    ...VATSIMChecklistItemsData,
    ...SimulatorSetupChecklistItemsData,
});

export const ChecklistItemsNotImplemented = new Set(
    Object
        .entries(objectMap(ChecklistItemsData, (item) => item.tagsSet.has(ChecklistTags.NOT_IMPLEMENTED)))
        .filter((keyValue) => keyValue[1])
        .map((keyValue) => keyValue[0]),
);
