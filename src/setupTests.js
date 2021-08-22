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
