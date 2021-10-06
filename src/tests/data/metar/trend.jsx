import { TokenTypes, TrendTimeType, TrendType } from 'lib/metar/enums';

export const TestDataTrend_NOSIG_Text = 'NOSIG';
export const TestDataTrend_NOSIG_Data = {
    tokenType: TokenTypes.TREND,
    args: ['trendType'],
    context: '58281584-1a95-4cee-a4f1-b9bf4461e440',

    trendType: 'NOSIG',
    trendTypeP: TrendType.NOSIG,

    timeCount: 0,
    timeArgs: [],
    timeParts: [],
};

export const TestDataTrend_BECMG_Text = 'BECMG FM1100 TL1200';
export const TestDataTrend_BECMG_Data = {
    tokenType: TokenTypes.TREND,
    args: ['trendType', 'time0', 'time1'],
    context: '58281584-1a95-4cee-a4f1-b9bf4461e440',

    trendType: 'BECMG',
    trendTypeP: TrendType.BECOMING,

    time0: 'FM1100',
    time0P: {
        trendTimeType: TrendTimeType.FROM,
        hour: '11',
        minutes: '00',
    },

    time1: 'TL1200',
    time1P: {
        trendTimeType: TrendTimeType.UNTIL,
        hour: '12',
        minutes: '00',
    },

    timeCount: 2,
    timeArgs: ['time0', 'time1'],
    timeParts: [
        {
            argID: 'time0',
            time: 'FM1100',
            timeP: {
                trendTimeType: TrendTimeType.FROM,
                hour: '11',
                minutes: '00',
            },
        },
        {
            argID: 'time1',
            time: 'TL1200',
            timeP: {
                trendTimeType: TrendTimeType.UNTIL,
                hour: '12',
                minutes: '00',
            },
        },
    ],
};

export const TestDataTrend_TEMPO_Text = 'TEMPO AT1432';
export const TestDataTrend_TEMPO_Data = {
    tokenType: TokenTypes.TREND,
    args: ['trendType', 'time0'],
    context: '58281584-1a95-4cee-a4f1-b9bf4461e440',

    trendType: 'TEMPO',
    trendTypeP: TrendType.TEMPORARY,

    time0: 'AT1432',
    time0P: {
        trendTimeType: TrendTimeType.AT,
        hour: '14',
        minutes: '32',
    },

    timeCount: 1,
    timeArgs: ['time0'],
    timeParts: [
        {
            argID: 'time0',
            time: 'AT1432',
            timeP: {
                trendTimeType: TrendTimeType.AT,
                hour: '14',
                minutes: '32',
            },
        },
    ],
};
