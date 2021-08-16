const commonModeStates = Object.freeze({
    ON: 'on',
    OPTIONALLY_ON: 'optionally_on',
    OPTIONALLY_OFF: 'optionally_off',
    OFF: 'off',
});

export const AntiIceModeStates = Object.freeze({
    ...commonModeStates,
});
