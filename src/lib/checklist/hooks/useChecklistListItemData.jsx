import { useDispatch } from 'react-redux';
import { useDeepMemo, useDeepSelector } from 'lib/hooks/deep';
import { listItemKey } from 'lib/checklist/listItemKey';
import { getChecklistListItemData } from 'state/readers/checklist';
import { toggleItem } from 'state/actions/checklist';

const defaultData = {
    isNotImplemented: false,
};

export const useChecklistListItemData = ({
    checklistData,
    checklistName,
    checklistListName,
    itemName,
}) => {
    const dispatch = useDispatch();

    const baseData = useDeepMemo(
        () => ({
            itemKey: listItemKey(checklistName, checklistListName, itemName),
            ...checklistData.listItemsData[itemName],
        }),
        [checklistData, itemName],
    );

    const dynamicData = useDeepSelector((state) => getChecklistListItemData(state, checklistName, baseData.itemKey));

    return useDeepMemo(
        () => {
            const toggleChecked = () => {
                dispatch(toggleItem(checklistName, checklistListName, baseData.itemKey));
            };

            return ({
                ...defaultData,
                ...baseData,
                ...dynamicData,

                toggleChecked,
            });
        },
        [baseData, dynamicData, dispatch],
    );
};
