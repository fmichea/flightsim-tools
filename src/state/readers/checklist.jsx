import { pick } from 'lib/pick';
import { defaultChecklistListState, defaultChecklistState } from 'state/constants/checklist';

export const getChecklistGlobalConfig = (state) => pick(
    state.checklist,
    defaultChecklistState,
).config;

export const getChecklistData = (state, checklistName) => pick(
    state.checklist.lists[checklistName],
    defaultChecklistListState,
);
