import PropTypes from 'prop-types';

import { ChecklistURLManager } from 'lib/checklist/hooks/useChecklistURLConfig';

// FIXME: complete these types.

export const ChecklistURLManagerPropTypes = PropTypes.oneOfType([
    PropTypes.instanceOf(ChecklistURLManager),
    PropTypes.shape({
        changeChecklistList: PropTypes.func.isRequired,
        addFilter: PropTypes.func.isRequired,
        removeFilter: PropTypes.func.isRequired,
    }),
]);

export const ChecklistDataItemTagsPropTypes = PropTypes.shape({});

export const ChecklistDataPropTypes = PropTypes.shape({
    selectableFilters: PropTypes.arrayOf(PropTypes.string).isRequired,
    selectableFiltersData: PropTypes.shape.isRequired,
});
