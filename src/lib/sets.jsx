export const intersection = (setA, setB) => {
    const result = new Set();

    Array.from(setB).forEach((elem) => {
        if (setA.has(elem)) {
            result.add(elem);
        }
    });
    return result;
};
