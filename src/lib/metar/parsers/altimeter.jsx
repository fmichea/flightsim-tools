import { isNotNullOrUndefined } from 'lib/isNullOrUndefined';
import { AltimeterUnit, AltimeterSetting, TokenTypes } from 'lib/metar/enums';

const fixAltimeterValue = (altimeterUnitP, value) => {
    if (value === '////') {
        return AltimeterSetting.NOT_REPORTED;
    }
    return altimeterUnitP === AltimeterUnit.INHG ? (value / 100) : 1 * value;
};

export const parseAltimeter = (parser) => {
    const { groups } = parser.matchNextTokenAndForward(
        '(?<altimeterUnit>[QA])(?<value>([0-9]{4}|////))',
    );

    if (isNotNullOrUndefined(groups)) {
        const { altimeterUnit, value } = groups;

        const altimeterUnitP = altimeterUnit === 'A' ? AltimeterUnit.INHG : AltimeterUnit.HPA;

        return {
            tokenType: TokenTypes.ALTIMETER_SETTING,
            args: ['altimeterUnit', 'value'],

            altimeterUnit,
            value,

            altimeterUnitP,
            valueP: fixAltimeterValue(altimeterUnitP, value),
        };
    }
    return null;
};
