import { TokenTypes } from 'lib/metar/enums';

export const TestDataRemarks_Text = 'RMK AO2 LTG DSNT SE T02440236';
export const TestDataRemarks_Data = {
    tokenType: TokenTypes.REMARKS,
    args: ['rmk', 'remarks'],

    rmk: 'RMK',
    remarks: 'AO2 LTG DSNT SE T02440236',
};
