import { mountWithStore } from 'tests/lib/mountWithStore';
import { AntiIceAircraftNotFound } from 'components/anti-ice/AntiIceAircraftNotFound';
import { pick } from 'lib/pick';

const setup = ({ props } = {}) => {
    const defaultProps = {
        aircraftName: 'blahblah-aircraft',
    };

    return mountWithStore(AntiIceAircraftNotFound, {
        props: {
            ...defaultProps,
            ...pick(props, {}),
        },
    });
};

describe('AntiIceAircraftNotFound', () => {
    test('information is displayed on aircraft not known', () => {
        const { compWrapper } = setup();

        const description = compWrapper().find('div.ant-empty-description');
        expect(description.text()).toEqual('Unknown aircraft "blahblah-aircraft". Go Back.');
    });
});
