import {
    RunwayContaminationDepth,
    RunwayContaminationExtent,
    RunwayDeposit,
    RunwaySurfaceFriction,
    TokenTypes,
} from 'lib/metar/enums';

export const TestDataRunwayState_R24451293_Text = 'R24/451293';
export const TestDataRunwayState_R24451293_Data = {
    tokenType: TokenTypes.RUNWAY_STATE,
    args: ['runway', 'deposit', 'extent', 'depth', 'friction'],

    runway: '24',
    deposit: '4',
    extent: '5',
    depth: '12',
    friction: '93',

    runwayP: '24',
    depositP: RunwayDeposit.DRY_SNOW,
    extentP: RunwayContaminationExtent.TWENTY_FIVE_TO_FIFTY,
    depthP: 12,
    frictionP: RunwaySurfaceFriction.BRAKING_ACTION_MEDIUM,
};

export const TestDataRunwayState_R31XXXXXX_Text = 'R31///////';
export const TestDataRunwayState_R31XXXXXX_Data = {
    tokenType: TokenTypes.RUNWAY_STATE,
    args: ['runway', 'deposit', 'extent', 'depth', 'friction'],

    runway: '31',
    deposit: '/',
    extent: '/',
    depth: '//',
    friction: '//',

    runwayP: '31',
    depositP: RunwayDeposit.NOT_REPORTED,
    extentP: RunwayContaminationExtent.NOT_REPORTED,
    depthP: RunwayContaminationDepth.NOT_REPORTED,
    frictionP: RunwaySurfaceFriction.NOT_REPORTED,
};
