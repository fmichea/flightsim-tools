import { act } from '@testing-library/react';

import { AntiIceMoistureSelector } from 'components/anti-ice/AntiIceMoistureSelector';
import { pick } from 'lib/pick';
import { mountWithStore } from 'tests/lib/mountWithStore';

const setup = ({ props } = {}) => {
    const mockSetMoisture = jest.fn();

    const defaultProps = {
        moisture: false,
        setMoisture: mockSetMoisture,
    };

    const result = mountWithStore(AntiIceMoistureSelector, {
        props: {
            ...defaultProps,
            ...pick(props, {}),
        },
    });

    return { ...result, mockSetMoisture };
};

describe('AntiIceMoistureSelector', () => {
    test('choices are available', () => {
        const { mockSetMoisture, getAntdMocks, getAntdMockProps } = setup();

        const radioGroup = getAntdMocks('radio-group');
        expect(radioGroup).toHaveLength(1);

        const { onChange } = getAntdMockProps(radioGroup.at(0));
        act(() => {
            onChange({ target: { value: 'yes' } });
            onChange({ target: { value: 'no' } });
        });

        const { calls } = mockSetMoisture.mock;
        expect(calls).toHaveLength(2);
        expect(calls[0][0]).toEqual(true);
        expect(calls[1][0]).toEqual(false);

        const radioGroupButtons = getAntdMocks('radio-button', radioGroup.at(0));
        expect(radioGroupButtons).toHaveLength(2);

        expect(radioGroupButtons.at(0).text()).toEqual('Yes');
        expect(getAntdMockProps(radioGroupButtons.at(0)).value).toEqual('yes');

        expect(radioGroupButtons.at(1).text()).toEqual('No');
        expect(getAntdMockProps(radioGroupButtons.at(1)).value).toEqual('no');
    });
});
