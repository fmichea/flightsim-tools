import { isNotNullOrUndefined } from 'lib/isNullOrUndefined';
import {
    RunwayContaminationDepth, RunwayContaminationExtent, RunwayDeposit, RunwaySurfaceFriction, TokenTypes,
} from 'lib/metar/enums';
import { pick } from 'lib/pick';

const depositMapping = [
    RunwayDeposit.CLEAR_AND_DRY,
    RunwayDeposit.DAMP,
    RunwayDeposit.WET,
    RunwayDeposit.RIME_AND_FROST,
    RunwayDeposit.DRY_SNOW,
    RunwayDeposit.WET_SNOW,
    RunwayDeposit.SLUSH,
    RunwayDeposit.ICE,
    RunwayDeposit.COMPACTED_SNOW,
    RunwayDeposit.FROZEN_RUTS,
];

const parseDepositType = (value) => {
    if (value === '/') {
        return RunwayDeposit.NOT_REPORTED;
    }
    return depositMapping[1 * value];
};

const contaminationExtentMapping = {
    1: RunwayContaminationExtent.BELOW_TEN,
    2: RunwayContaminationExtent.TEN_TO_TWENTY_FIVE,
    5: RunwayContaminationExtent.TWENTY_FIVE_TO_FIFTY,
    9: RunwayContaminationExtent.ABOVE_FIFTY,
};

const parseContaminationExtent = (value) => {
    if (value === '/') {
        return RunwayContaminationExtent.NOT_REPORTED;
    }

    return pick(
        contaminationExtentMapping[1 * value],
        RunwayContaminationExtent.UNKNOWN_RESERVED,
    );
};

const contaminationDepthMapping = {
    92: RunwayContaminationDepth.TEN_CM,
    93: RunwayContaminationDepth.FIFTEEN_CM,
    94: RunwayContaminationDepth.TWENTY_CM,
    95: RunwayContaminationDepth.TWENTY_FIVE_CM,
    96: RunwayContaminationDepth.THIRTY_CM,
    97: RunwayContaminationDepth.THIRTY_FIVE_CM,
    98: RunwayContaminationDepth.FORTY_CM,
    99: RunwayContaminationDepth.NOT_OPERATIONAL,
};

const parseContaminationDepth = (value) => {
    if (value === '//') {
        return RunwayContaminationDepth.NOT_REPORTED;
    }

    const valueI = 1 * value;
    return pick(contaminationDepthMapping[valueI], valueI);
};

const surfaceFrictionMapping = {
    91: RunwaySurfaceFriction.BRAKING_ACTION_POOR,
    92: RunwaySurfaceFriction.BRAKING_ACTION_MEDIUM_POOR,
    93: RunwaySurfaceFriction.BRAKING_ACTION_MEDIUM,
    94: RunwaySurfaceFriction.BRAKING_ACTION_MEDIUM_GOOD,
    95: RunwaySurfaceFriction.BRAKING_ACTION_GOOD,

    96: RunwaySurfaceFriction.UNKNOWN_RESERVED,
    97: RunwaySurfaceFriction.UNKNOWN_RESERVED,
    98: RunwaySurfaceFriction.UNKNOWN_RESERVED,

    99: RunwaySurfaceFriction.UNRELIABLE,
};

const parseSurfaceFriction = (value) => {
    if (value === '//') {
        return RunwaySurfaceFriction.NOT_REPORTED;
    }

    const valueI = 1 * value;
    return pick(surfaceFrictionMapping[valueI], valueI / 100);
};

export const parseRunwayState = (parser) => {
    const { groups } = parser.matchNextTokenAndForward(
        'R(?<runway>[0-9]{2})/(?<deposit>([0-9]|/))(?<extent>([0-9]|/))'
        + '(?<depth>([0-9]{2}|//))(?<friction>([0-9]{2}|//))',
    );

    if (isNotNullOrUndefined(groups)) {
        const {
            runway, deposit, extent, depth, friction,
        } = groups;

        return {
            tokenType: TokenTypes.RUNWAY_STATE,
            args: ['runway', 'deposit', 'extent', 'depth', 'friction'],

            runway,
            deposit,
            extent,
            depth,
            friction,

            runwayP: runway,
            depositP: parseDepositType(deposit),
            extentP: parseContaminationExtent(extent),
            depthP: parseContaminationDepth(depth),
            frictionP: parseSurfaceFriction(friction),
        };
    }

    return null;
};
