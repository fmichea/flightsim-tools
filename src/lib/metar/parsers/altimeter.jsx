import { isNotNullOrUndefined } from 'lib/isNullOrUndefined';
import { AltimeterUnit, TokenTypes } from 'lib/metar/enums';

export const parseAltimeter = (parser) => {
    const { groups } = parser.matchNextTokenAndForward(
        /(?<altimeterUnit>[QA])(?<value>[0-9]{4})/,
    );

    if (isNotNullOrUndefined(groups)) {
        const { altimeterUnit, value } = groups;

        return {
            tokenType: TokenTypes.ALTIMETER_SETTING,
            args: ['altimeterUnit', 'value'],

            altimeterUnit,
            value,

            altimeterUnitP: altimeterUnit === 'A' ? AltimeterUnit.INHG : AltimeterUnit.HPA,
            valueP: altimeterUnit === 'A' ? (value / 100) : 1 * value,
        };
    }
    return null;
};
