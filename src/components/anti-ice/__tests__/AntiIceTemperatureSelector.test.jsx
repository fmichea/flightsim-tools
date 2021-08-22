import { mountWithStore } from 'tests/lib/mountWithStore';
import { AntiIceTemperatureSelector } from 'components/anti-ice/AntiIceTemperatureSelector';
import { pick } from 'lib/pick';

const setup = ({ props } = {}) => {
    const mockOnChange = jest.fn();

    const defaultProps = {
        moisture: true,
        temperature: 0,
    };

    const defaultSliderProps = {
        marks: { 0: '0', 10: '10' },
        min: -10,
        max: 30,
        onChange: mockOnChange,
    };

    const result = mountWithStore(AntiIceTemperatureSelector, {
        props: {
            ...defaultProps,
            ...pick(props, {}),

            sliderData: {
                ...defaultSliderProps,
                ...pick(pick(props, {}).sliderData, {}),
            },
        },
    });

    return { ...result, mockOnChange };
};

describe('AntiIceTemperatureSelector', () => {
    test('moisture on is enabled', () => {
        const { getAntdMocks, getAntdMockProps } = setup();

        const slider = getAntdMocks('slider');
        expect(slider).toHaveLength(1);

        const props = getAntdMockProps(slider.at(0));
        expect(props.disabled).toBeFalsy();
        expect(props.handleStyle).not.toBeDefined();

        expect(props.min).toEqual(-10);
        expect(props.max).toEqual(30);
    });

    test('moisture off is disabled and handle hidden', () => {
        const { getAntdMocks, getAntdMockProps } = setup({ props: { moisture: false } });

        const slider = getAntdMocks('slider');
        expect(slider).toHaveLength(1);

        const props = getAntdMockProps(slider.at(0));
        expect(props.disabled).toBeTruthy();
        expect(props.handleStyle).toBeDefined();
    });
});
