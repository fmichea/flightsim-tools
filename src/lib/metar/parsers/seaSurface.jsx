import { isNotNullOrUndefined, isNullOrUndefined } from 'lib/isNullOrUndefined';
import { SeaSurfaceInfoType, SeaSurfaceStateCode, TokenTypes } from 'lib/metar/enums';
import { fixTemp, TemperaturePattern } from 'lib/metar/parsers/internal/temperatures';
import { pick } from 'lib/pick';

const stateCodesMapping = [
    SeaSurfaceStateCode.CALM_GLASSY,
    SeaSurfaceStateCode.CALM_RIPPLED,
    SeaSurfaceStateCode.SMOOTH,
    SeaSurfaceStateCode.SLIGHT,
    SeaSurfaceStateCode.MODERATE,
    SeaSurfaceStateCode.ROUGH,
    SeaSurfaceStateCode.VERY_ROUGH,
    SeaSurfaceStateCode.HIGH,
    SeaSurfaceStateCode.VERY_HIGH,
    SeaSurfaceStateCode.PHENOMENAL,
];

export const createSeaSurfaceToken = (temperature, { seaStateCode, waveHeight }) => ({
    tokenType: TokenTypes.SEA_SURFACE,
    args: ['temperature', 'seaStateCode', 'waveHeight'],

    infoType: (
        isNullOrUndefined(waveHeight)
            ? SeaSurfaceInfoType.SURFACE_STATE
            : SeaSurfaceInfoType.WAVE_HEIGHT
    ),

    temperature,
    seaStateCode: pick(seaStateCode),
    waveHeight: pick(waveHeight),

    temperatureP: fixTemp(temperature),
    seaStateCodeP: isNullOrUndefined(seaStateCode) ? null : pick(stateCodesMapping[1 * seaStateCode]),
    waveHeightP: isNullOrUndefined(waveHeight) ? null : waveHeight * 10,
});

export const parseSeaSurface = (parser) => {
    const { groups: seaStateGroups } = parser.matchNextTokenAndForward(
        `W(?<temperature>${TemperaturePattern})/S(?<seaStateCode>[0-9])`,
    );
    if (isNotNullOrUndefined(seaStateGroups)) {
        const { temperature, seaStateCode } = seaStateGroups;
        return createSeaSurfaceToken(temperature, { seaStateCode });
    }

    const { groups: waveHeightGroups } = parser.matchNextTokenAndForward(
        `W(?<temperature>${TemperaturePattern})/H(?<waveHeight>[0-9]{3})`,
    );
    if (isNotNullOrUndefined(waveHeightGroups)) {
        const { temperature, waveHeight } = waveHeightGroups;
        return createSeaSurfaceToken(temperature, { waveHeight });
    }

    return null;
};
