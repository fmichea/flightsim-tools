export const buildVariableArgs = (prefix, parts) => {
    const argsKey = `${prefix}Args`;
    const countKey = `${prefix}Count`;
    const partsKey = `${prefix}Parts`;

    const result = {
        [argsKey]: [],
        [countKey]: parts.length,
        [partsKey]: [],
    };

    parts.forEach((part, idx) => {
        const valueIdxKey = `${prefix}${idx}`;
        const valueIdxKeyP = `${valueIdxKey}P`;

        result[argsKey].push(valueIdxKey);
        result[valueIdxKey] = part.value;
        result[valueIdxKeyP] = part.parsed;

        const valueKey = prefix;
        const valueKeyP = `${valueKey}P`;

        result[partsKey].push({
            [valueKey]: part.value,
            [valueKeyP]: part.parsed,
            argID: valueIdxKey,
        });
    });
    return result;
};
