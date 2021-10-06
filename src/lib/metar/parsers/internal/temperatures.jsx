export const TemperaturePattern = 'M?[0-9]{2}';

export const fixTemp = (temp) => (temp[0] === 'M' ? -1 * temp.substring(1) : 1 * temp);
