export const getOrdinalNumber = (value) => {
    const valueI = 1 * value;

    const unit = valueI % 10;
    const decimal = valueI % 100;

    if (unit === 1 && decimal !== 11) {
        return `${valueI}st`;
    }
    if (unit === 2 && decimal !== 12) {
        return `${valueI}nd`;
    }
    if (unit === 3 && decimal !== 13) {
        return `${valueI}rd`;
    }
    return `${valueI}th`;
};
