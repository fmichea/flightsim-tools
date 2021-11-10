import { combineReducers } from 'redux';

import { checklistReducer } from 'state/reducers/checklist';

export const reducers = combineReducers({
    checklist: checklistReducer,
});
