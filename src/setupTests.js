import React from 'react';

// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';

// Configure enzyme adapter for rendering, needs to follow react version.
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

jest.mock('uuid', () => ({
    v4: () => '58281584-1a95-4cee-a4f1-b9bf4461e440',
}));

jest.mock('antd', () => {
    const antd = jest.requireActual('antd');

    const buildPlaceholderComponent = ({ name, propNames }) => {
        const uniqueName = `antd-mock-${name}`;
        const propNamesSet = [uniqueName, 'style', 'className', ...propNames];

        return (props) => {
            const { children, ...mockprops } = props !== undefined ? props : {};

            Object.keys(mockprops).forEach((value) => {
                expect(propNamesSet).toContain(value);
            });
            return <div className={uniqueName} mockprops={mockprops}>{children}</div>;
        };
    };
    const Select = buildPlaceholderComponent({
        name: 'select',
        propNames: [
            'value',
            'defaultValue',
            'multiple',
            'disabled',
            'className',
            'onChange',
        ],
    });

    Select.OptGroup = buildPlaceholderComponent({
        name: 'select-optgroup',
        propNames: [
            'label',
        ],
    });

    Select.Option = buildPlaceholderComponent({
        name: 'select-option',
        propNames: [
            'disabled',
            'title',
            'value',
        ],
    });

    const Radio = {};

    Radio.Group = buildPlaceholderComponent({
        name: 'radio-group',
        propNames: [
            'buttonStyle',
            'defaultValue',
            'disabled',
            'name',
            'onChange',
            'options',
            'optionType',
            'size',
            'value',
        ],
    });

    Radio.Button = buildPlaceholderComponent({
        name: 'radio-button',
        propNames: [
            'autoFocus',
            'checked',
            'defaultChecked',
            'disabled',
            'value',
        ],
    });

    const Slider = buildPlaceholderComponent({
        name: 'slider',
        propNames: [
            'autoFocus',
            'defaultValue',
            'disabled',
            'dots',
            'getTooltipPopupContainer',
            'included',
            'marks',
            'max',
            'min',
            'range',
            'reverse',
            'step',
            'tipFormatter',
            'tooltipPlacement',
            'tooltipVisible',
            'value',
            'vertical',
            'onAfterChange',
            'onChange',
            'trackStyle',
            'handleStyle',
        ],
    });

    return {
        ...antd,
        Radio,
        Select,
        Slider,
    };
});

expect.extend({
    toBeSetOfDataKeys(keys) {
        const errors = [];

        Object.entries(keys).forEach((entry) => {
            const [key, value] = entry;

            const valueToKey = value.toUpperCase().replace(/-/g, '_');
            if (key !== valueToKey) {
                errors.push({ key, value, valueToKey });
            }
        });

        return {
            pass: errors.length === 0,
            message: () => errors
                .map((data) => `${data.key} has invalid value ${data.value} (interpreted as: ${data.valueToKey})`)
                .join('\n'),
        };
    },

    toHaveDataForEachDataKeys(keys, keysData) {
        const errors = [];
        const keysDataKeys = new Set(Object.keys(keysData));

        Object.values(keys).forEach((keyName) => {
            if (!keysDataKeys.has(keyName)) {
                errors.push({ keyName });
            }
        });

        return {
            pass: errors.length === 0,
            message: () => errors
                .map((data) => `${data.keyName} was not found in data.`)
                .join('\n'),
        };
    },
});
