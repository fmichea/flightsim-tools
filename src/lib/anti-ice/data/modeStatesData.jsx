import { createTransformedMapping } from 'lib/checklist/data/transforms';
import { AntiIceModeStates } from 'lib/anti-ice/data/modeStates';

const commonModeStatesData = createTransformedMapping()([
    {
        uid: AntiIceModeStates.ON,
        label: 'ON',
        color: '#1e8600',
    },
    {
        uid: AntiIceModeStates.OPTIONALLY_ON,
        label: 'OFF',
        color: '#730505',
        isOptional: true,
    },
    {
        uid: AntiIceModeStates.OPTIONALLY_OFF,
        label: 'ON',
        color: '#135700',
        isOptional: true,
    },
    {
        uid: AntiIceModeStates.OFF,
        label: 'OFF',
        color: '#9d0f0f',
    },
]);

export const AntiIceModeStatesData = Object.freeze({
    ...commonModeStatesData,
});
