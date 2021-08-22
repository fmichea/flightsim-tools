import { mountWithStore } from 'tests/lib/mountWithStore';
import { AntiIceConfigurationSelector } from 'components/anti-ice/AntiIceConfigurationSelector';
import { pick } from 'lib/pick';

const setup = ({ props } = {}) => {
    const mockSetCurrentConfiguration = jest.fn();

    const defaultProps = {
        currentConfiguration: 'default',
        setCurrentConfiguration: mockSetCurrentConfiguration,
        optionalModesOrder: ['optional-1', 'optional-2'],
        optionalModesMapping: {
            'optional-1': {
                title: 'Optional 1',
            },
            'optional-2': {
                title: 'Optional 2',
            },
        },
    };

    const result = mountWithStore(AntiIceConfigurationSelector, {
        props: {
            ...defaultProps,
            ...pick(props, {}),
        },
    });

    return { ...result, mockSetCurrentConfiguration };
};

describe('AntiIceConfigurationSelector', () => {
    test('test with two options has data', () => {
        const { getAntdMocks, getAntdMockProps } = setup();

        const select = getAntdMocks('select');
        expect(select).toHaveLength(1);

        const selectProps = getAntdMockProps(select.at(0));
        expect(selectProps.disabled).toBeFalsy();
        expect(selectProps.value).toEqual('default');

        const options = getAntdMocks('select-option', select.at(0));
        expect(options).toHaveLength(3);

        expect(getAntdMockProps(options.at(0)).value).toEqual('default');
        expect(options.at(0).text()).toEqual('default');

        expect(getAntdMockProps(options.at(1)).value).toEqual('optional-1');
        expect(options.at(1).text()).toEqual('Optional 1');

        expect(getAntdMockProps(options.at(2)).value).toEqual('optional-2');
        expect(options.at(2).text()).toEqual('Optional 2');
    });

    test('no additional option, only default and disabled', () => {
        const { getAntdMocks, getAntdMockProps } = setup({
            props: {
                optionalModesOrder: [],
            },
        });

        const select = getAntdMocks('select');
        expect(select).toHaveLength(1);

        const selectProps = getAntdMockProps(select.at(0));
        expect(selectProps.disabled).toBeTruthy();
        expect(selectProps.value).toEqual('default');

        const options = getAntdMocks('select-option', select.at(0));
        expect(options).toHaveLength(1);

        expect(getAntdMockProps(options.at(0)).value).toEqual('default');
        expect(options.at(0).text()).toEqual('default');
    });
});
