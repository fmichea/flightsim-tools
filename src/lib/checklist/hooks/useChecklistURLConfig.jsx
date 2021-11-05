import { useMemo } from 'react';
import { generatePath, useHistory, useParams } from 'react-router';
import { pick } from 'lib/pick';
import { useQueryParams } from 'lib/hooks/useQueryParams';
import { isNotNullOrUndefined, isNullOrUndefined } from 'lib/isNullOrUndefined';
import { ChecklistsWithNameAndListNameRoute, ChecklistsWithNameRoute } from 'lib/routes';
import { useDeepMemo } from 'lib/hooks/deep';

export class ChecklistURLManager {
    constructor({
        history, checklistName, checklistListName, selectedFilters,
    }) {
        this.history = history;
        this.checklistName = checklistName;
        this.checklistListName = checklistListName;
        this.selectedFilters = selectedFilters;
    }

    changeChecklistList(checklistListName) {
        this.pushURL(checklistListName, this.selectedFilters);
    }

    addFilter(filterName) {
        this.pushURL(this.checklistListName, [...this.selectedFilters, filterName]);
    }

    removeFilter(filterName) {
        this.pushURL(this.checklistListName, this.selectedFilters.filter((v) => v !== filterName));
    }

    pushURL(checklistListName, filters) {
        const baseURL = this.buildURL(checklistListName);
        const urlParams = this.buildURLParams(filters);

        if (urlParams !== '') {
            this.history.push(`${baseURL}?${urlParams}`);
        } else {
            this.history.push(baseURL);
        }
    }

    buildURL(checklistListName) {
        if (isNotNullOrUndefined(checklistListName)) {
            return generatePath(
                ChecklistsWithNameAndListNameRoute,
                {
                    checklistName: this.checklistName,
                    checklistListName,
                },
            );
        }

        return generatePath(
            ChecklistsWithNameRoute,
            {
                checklistName: this.checklistName,
            },
        );
    }

    // eslint-disable-next-line class-methods-use-this
    buildURLParams(filters) {
        const queryParams = new URLSearchParams();
        if (isNotNullOrUndefined(filters) && filters.length !== 0) {
            filters.forEach((filterName) => queryParams.append('filter', filterName));
        }
        return queryParams.toString();
    }
}

const useSelectedFilters = () => {
    const queryParams = useQueryParams();

    return useMemo(() => {
        const selectedFilters = queryParams.getAll('filter');
        if (isNullOrUndefined(selectedFilters) || selectedFilters.length === 0) {
            return [];
        }
        return selectedFilters;
    }, [queryParams]);
};

export const useChecklistURLConfig = () => {
    const history = useHistory();
    const { checklistName, checklistListName } = useParams();

    const selectedFilters = useSelectedFilters();

    const result = {
        checklistName: pick(checklistName),
        checklistListName: pick(checklistListName),
        selectedFilters,
    };

    const checklistURLManager = useDeepMemo(
        () => new ChecklistURLManager({ history, ...result }),
        [history, result],
    );

    return { checklistURLManager, ...result };
};
