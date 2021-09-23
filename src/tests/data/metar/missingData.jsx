import { TokenTypes } from 'lib/metar/enums';

export const TestDataMissingData_Text = '//////';
export const TestDataMissingData_Data = {
    tokenType: TokenTypes.MISSING_DATA,
    args: ['value'],
    value: TestDataMissingData_Text,
};
