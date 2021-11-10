import { C172G1000ChecklistData } from 'lib/checklist/data/checklistsData/c172g1000';
import { C172SteamChecklistData } from 'lib/checklist/data/checklistsData/c172steam';
import { CJ4ChecklistData } from 'lib/checklist/data/checklistsData/cj4';
import { CRJ7ChecklistData } from 'lib/checklist/data/checklistsData/crj7';
import { createTransformedMapping } from 'lib/checklist/data/transforms';

export const ChecklistsData = createTransformedMapping()([
    CJ4ChecklistData,
    C172SteamChecklistData,
    C172G1000ChecklistData,
    CRJ7ChecklistData,
]);
