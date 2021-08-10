import { mountWithStore } from 'tests/lib/mountWithStore';
import { ChecklistMenuTitle } from 'components/checklists/ChecklistMenuTitle';
import { Progress } from 'antd';
import { pick } from 'lib/pick';

const setup = ({ props } = {}) => {
    const defaultProps = { title: 'Some Title', percentProgress: '0' };
    return mountWithStore(ChecklistMenuTitle, {
        props: {
            ...defaultProps,
            ...pick(props, {}),
        },
    });
};

describe('ChecklistMenuTitle', () => {
    test('simple case with 0% progress', () => {
        const { compWrapper } = setup();

        const main = compWrapper().find(ChecklistMenuTitle);
        expect(main).toHaveLength(1);
        expect(main.text()).toContain('Some Title');

        const titleColor = main.find('div');
        expect(titleColor).toHaveLength(2);
        expect(titleColor.at(0).props().className).not.toContain('color:');

        const progress = compWrapper().find(ChecklistMenuTitle).find(Progress);
        expect(progress).toHaveLength(0);
    });

    test('emergency title is red', () => {
        const { compWrapper } = setup({ props: { isEmergency: true } });

        const titleColor = compWrapper().find(ChecklistMenuTitle).find('div');
        expect(titleColor).toHaveLength(2);
        expect(titleColor.at(0).props().className).toContain('color:');

        const progress = compWrapper().find(ChecklistMenuTitle).find(Progress);
        expect(progress).toHaveLength(0);
    });

    test('progress is displayed', () => {
        const { compWrapper } = setup({ props: { percentProgress: '19' } });

        const progress = compWrapper().find(ChecklistMenuTitle).find(Progress);
        expect(progress).toHaveLength(1);
    });
});
