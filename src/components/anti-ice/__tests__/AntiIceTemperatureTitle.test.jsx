import React from 'react';

import { AntiIceTemperatureTitle } from 'components/anti-ice/AntiIceTemperatureTitle';
import { pick } from 'lib/pick';
import { mountWithStore } from 'tests/lib/mountWithStore';

const setup = ({ temperature } = {}) => {
    const defaultTemperature = {
        name: 'OAT',
        fullName: 'Outside Air Temperature',
        description: 'Some description of OAT.',
    };

    return mountWithStore(AntiIceTemperatureTitle, {
        props: {
            temperature: {
                ...defaultTemperature,
                ...pick(temperature, {}),
            },
        },
    });
};

describe('AntiIceTemperatureTitle', () => {
    test('everything provided results in info plus tooltip', () => {
        const { compWrapper } = setup();

        const contents = compWrapper();
        expect(contents.text()).toEqual('Temperature (OAT )');

        // FIXME: Find a way to test this.
        // const { title } = contents.find('Tooltip').at(0).props();
        // expect(title).toEqual(
        //     <>
        //         <strong>Outside Air Temperature</strong>
        //         <>
        //             :
        //             {' '}
        //             Some description of OAT.
        //         </>
        //     </>,
        // );
    });
});
