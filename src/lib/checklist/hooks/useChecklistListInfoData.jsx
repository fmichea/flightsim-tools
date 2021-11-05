import { useDispatch } from 'react-redux';
import { getChecklistListCountersData } from 'state/readers/checklist';
import { useDeepMemo, useDeepSelector } from 'lib/hooks/deep';
import { resetChecklistListCheckedItems } from 'state/actions/checklist';
import { isNotNullOrUndefined } from 'lib/isNullOrUndefined';

export const useChecklistListInfoData = ({
    checklistData,
    checklistName,
    checklistListName,
    checklistURLManager,
}) => {
    const dispatch = useDispatch();

    const counters = useDeepSelector((state) => getChecklistListCountersData(state, checklistName, checklistListName));

    return useDeepMemo(
        () => {
            const setActiveCallback = () => {
                checklistURLManager.changeChecklistList(checklistListName);
            };

            const resetCallback = () => dispatch(resetChecklistListCheckedItems(
                checklistName,
                checklistListName,
            ));

            const { checkedCount, totalsCount } = counters;

            let progressPercent = 0;
            if (isNotNullOrUndefined(totalsCount)) {
                if (totalsCount !== 0) {
                    progressPercent = (checkedCount * 100) / totalsCount;
                } else {
                    progressPercent = 100;
                }
            }
            progressPercent = progressPercent.toFixed(0);

            return {
                ...checklistData.listsData[checklistListName],
                progressPercent,
                setActiveCallback,
                resetCallback,
            };
        },
        [checklistData, dispatch, checklistURLManager, counters],
    );
};
