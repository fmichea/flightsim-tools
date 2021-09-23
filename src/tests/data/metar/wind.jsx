import { TokenTypes, WindDirections, WindSpeedUnit } from 'lib/metar/enums';

const baseData = {
    tokenType: TokenTypes.WIND,
    args: ['direction', 'force', 'gustsForce', 'unit', 'fromDirection', 'toDirection'],
};

export const TestDataWind_20005KT_Text = '20005KT';
export const TestDataWind_20005KT_Data = {
    ...baseData,

    direction: '200',
    force: '05',
    gustsForce: null,
    unit: 'KT',
    fromDirection: null,
    toDirection: null,

    isCalm: false,

    directionP: 200,
    fromDirectionP: null,
    toDirectionP: null,

    forceP: 5,
    gustsForceP: null,
    unitP: WindSpeedUnit.KNOTS,
};

export const TestDataWind_12010G15KT_Text = '12010G15KT';
export const TestDataWind_12010G15KT_Data = {
    ...baseData,

    direction: '120',
    force: '10',
    gustsForce: '15',
    unit: 'KT',
    fromDirection: null,
    toDirection: null,

    isCalm: false,

    directionP: 120,
    fromDirectionP: null,
    toDirectionP: null,

    forceP: 10,
    gustsForceP: 15,
    unitP: WindSpeedUnit.KNOTS,
};

export const TestDataWind_090P00GP10MPS_Text = '090P00GP10MPS';
export const TestDataWind_090P00GP10MPS_Data = {
    ...baseData,

    direction: '090',
    force: 'P00',
    gustsForce: 'P10',
    unit: 'MPS',
    fromDirection: null,
    toDirection: null,

    isCalm: false,

    directionP: 90,
    fromDirectionP: null,
    toDirectionP: null,

    forceP: 100,
    gustsForceP: 110,
    unitP: WindSpeedUnit.METERS_PER_SECOND,
};

export const TestDataWind_VRB04KT_200V240_Text = 'VRB04KT 200V240';
export const TestDataWind_VRB04KT_200V240_Data = {
    ...baseData,

    direction: 'VRB',
    force: '04',
    gustsForce: null,
    unit: 'KT',
    fromDirection: '200',
    toDirection: '240',

    isCalm: false,

    directionP: WindDirections.VRB,
    fromDirectionP: 200,
    toDirectionP: 240,

    forceP: 4,
    gustsForceP: null,
    unitP: WindSpeedUnit.KNOTS,
};

export const TestDataWind_CALM_Text = '00000KT';
export const TestDataWind_CALM_Data = {
    ...baseData,

    direction: '000',
    force: '00',
    gustsForce: null,
    unit: 'KT',
    fromDirection: null,
    toDirection: null,

    isCalm: true,

    directionP: 0,
    fromDirectionP: null,
    toDirectionP: null,

    forceP: 0,
    gustsForceP: null,
    unitP: WindSpeedUnit.KNOTS,
};
