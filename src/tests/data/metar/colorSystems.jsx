import { TokenTypes } from 'lib/metar/enums';

export const TestDataColorSystems_BLUYLOREDBLACKBLUWHT_Text = 'BLU YLO RED BLACKBLU WHT';
export const TestDataColorSystems_BLUYLOREDBLACKBLUWHT_Data = {
    tokenType: TokenTypes.COLOR_SYSTEMS,
    args: ['color0', 'color1', 'color2', 'color3', 'color4'],

    color0: 'BLU',
    color1: 'YLO',
    color2: 'RED',
    color3: 'BLACKBLU',
    color4: 'WHT',

    color0P: 'BLU',
    color1P: 'YLO',
    color2P: 'RED',
    color3P: 'BLACKBLU',
    color4P: 'WHT',

    colorCount: 5,
    colorArgs: ['color0', 'color1', 'color2', 'color3', 'color4'],
    colorParts: [
        {
            argID: 'color0',
            color: 'BLU',
            colorP: 'BLU',
        },
        {
            argID: 'color1',
            color: 'YLO',
            colorP: 'YLO',
        },
        {
            argID: 'color2',
            color: 'RED',
            colorP: 'RED',
        },
        {
            argID: 'color3',
            color: 'BLACKBLU',
            colorP: 'BLACKBLU',
        },
        {
            argID: 'color4',
            color: 'WHT',
            colorP: 'WHT',
        },
    ],
};
