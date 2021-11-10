import {
    DarkeningMask,
    DarkerGrey,
    DarkGrey,
    LightBlueBGHover1,
    LightBlueBGHover2,
    LightGreenBG1,
    LightGreenBG2,
    LightGreenBGHover1,
    LightGreenBGHover2,
} from 'components/lib/colors';
import { styled } from 'styletron-react';

const checklistListItemBackground = (props) => {
    if (props.$isNotImplemented || props.$isChecked) {
        return props.$isOddItem ? LightGreenBG1 : LightGreenBG2;
    }
    return props.$isOddItem ? DarkeningMask : undefined;
};

const checklistListItemHoverBackground = (props) => {
    if (props.$isNotImplemented || props.$isChecked) {
        return props.$isOddItem ? LightGreenBGHover1 : LightGreenBGHover2;
    }
    return props.$isOddItem ? LightBlueBGHover1 : LightBlueBGHover2;
};

export const ChecklistListItemWrapper = styled('tbody', (props) => ({
    padding: '0.3em',
    backgroundColor: checklistListItemBackground(props),
    opacity: props.$isNotImplemented ? '30%' : undefined,
    borderBottom: `1px dashed ${DarkerGrey}`,
    ':hover': { backgroundColor: checklistListItemHoverBackground(props) },
}));

export const ChecklistListItemRow = styled('tr', {});

export const ChecklistListSubItemRow = styled('tr', (props) => ({
    backgroundColor: !props.$isOddSubItem ? DarkeningMask : undefined,
}));

export const ChecklistListItemTitle = styled('div', (props) => ({
    fontSize: props.$isSubItemsList ? '.85em' : '1em',
    fontWeight: 'bolder',
    color: DarkGrey,
}));

export const ChecklistListItemSubTitle = styled('div', {
    fontWeight: 'bold',
    fontSize: '.75em',
    color: '#727272',
});

export const ChecklistListItemState = styled('div', (props) => ({
    textAlign: 'right',
    fontSize: props.$isSubItemsList ? '.85em' : '1em',
    fontWeight: 'bolder',
    color: '#545454',
    textTransform: 'uppercase',
}));

export const ChecklistItemColumn = styled('td', (props) => ({
    maxWidth: props.$fitToContent ? undefined : '100%',
    width: props.$fitToContent ? '.0005%' : undefined,
    whiteSpace: props.$fitToContent ? 'nowrap' : undefined,

    paddingBottom: props.$isSubItemsList ? '2px' : '6px',
    paddingTop: props.$isSubItemsList ? '2px' : '6px',
    paddingLeft: props.$isFirst ? '6px' : undefined,
    paddingRight: props.$isLast ? '6px' : '1em',
}));

export const ChecklistSubItemsTable = styled('table', {
    width: '100%',
    opacity: '90%',
});
