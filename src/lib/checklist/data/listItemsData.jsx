import { A32NXChecklistItemsData } from 'lib/checklist/data/listItemsData/a32nx';
import { C172ChecklistItemsData } from 'lib/checklist/data/listItemsData/c172';
import { C172G1000ChecklistItemsData } from 'lib/checklist/data/listItemsData/c172g1000';
import { C172SteamChecklistItemsData } from 'lib/checklist/data/listItemsData/c172steam';
import { CJ4ChecklistItemsData } from 'lib/checklist/data/listItemsData/cj4';
import { CJ4ExtChecklistItemsData } from 'lib/checklist/data/listItemsData/cj4ext';
import { ACRJChecklistItemsData } from 'lib/checklist/data/listItemsData/crj';
import { ACRJExtChecklistItemsData } from 'lib/checklist/data/listItemsData/crjext';
import { NavChecklistItemsData } from 'lib/checklist/data/listItemsData/nav';
import { SimulatorSetupChecklistItemsData } from 'lib/checklist/data/listItemsData/simulatorSetup';
import { VATSIMChecklistItemsData } from 'lib/checklist/data/listItemsData/vatsim';
import { ChecklistTags } from 'lib/checklist/data/tags';
import { objectMap } from 'lib/objects';
import { pick } from 'lib/pick';

export const ChecklistItemsData = Object.freeze({
    ...CJ4ChecklistItemsData,
    ...CJ4ExtChecklistItemsData,
    ...C172ChecklistItemsData,
    ...C172SteamChecklistItemsData,
    ...C172G1000ChecklistItemsData,
    ...ACRJChecklistItemsData,
    ...ACRJExtChecklistItemsData,
    ...A32NXChecklistItemsData,
    ...VATSIMChecklistItemsData,
    ...NavChecklistItemsData,
    ...SimulatorSetupChecklistItemsData,
});

export const ChecklistItemsNotImplemented = new Set(
    Object
        .entries(objectMap(ChecklistItemsData, (item) => item.tagsSet.has(ChecklistTags.NOT_IMPLEMENTED)))
        .filter((keyValue) => keyValue[1])
        .map((keyValue) => keyValue[0]),
);

export const ChecklistItemsReplacements = objectMap(
    ChecklistItemsData,
    (item) => pick(item.replaces, []),
);
