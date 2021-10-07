import { Temperatures } from 'lib/metar/enums';

export const TemperaturePattern = '(M?[0-9]{2}|//)';

export const fixTemp = (temp) => {
    if (temp === '//') {
        return Temperatures.NOT_REPORTED;
    }
    return temp[0] === 'M' ? -1 * temp.substring(1) : 1 * temp;
};
