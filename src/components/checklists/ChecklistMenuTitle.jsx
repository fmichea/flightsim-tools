import { Progress } from 'antd';
import { Clearfix } from 'components/lib/Clearfix';
import React from 'react';
import { styled, withStyle } from 'styletron-react';
import PropTypes from 'prop-types';

const MenuTitle = styled('div', {
    float: 'left',
    fontWeight: 'bold',
    textTransform: 'uppercase',
});

const MenuTitleRed = withStyle(
    MenuTitle,
    {
        color: 'rgb(180,51,51)',
    },
);

const ProgressBackground = styled('div', {
    backgroundColor: 'rgba(255, 255, 255, .75)',
    paddingRight: '5px',
    paddingLeft: '5px',
    float: 'right',
});

const TitleComp = ({ isEmergency, children }) => {
    if (isEmergency) {
        return <MenuTitleRed>{children}</MenuTitleRed>;
    }
    return <MenuTitle>{children}</MenuTitle>;
};

TitleComp.propTypes = {
    isEmergency: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
};

const MenuTitleProgress = ({ percentProgress }) => {
    if (percentProgress === '0') {
        return null;
    }

    return (
        <ProgressBackground>
            <Progress
                type="circle"
                width={35}
                strokeWidth={8}
                percent={percentProgress}
            />
        </ProgressBackground>
    );
};

MenuTitleProgress.propTypes = {
    percentProgress: PropTypes.string.isRequired,
};

export const ChecklistMenuTitle = ({ title, isEmergency, percentProgress }) => (
    <>
        <TitleComp isEmergency={isEmergency}>
            {title}
        </TitleComp>
        <MenuTitleProgress percentProgress={percentProgress} />
        <Clearfix />
    </>
);

ChecklistMenuTitle.propTypes = {
    title: PropTypes.string.isRequired,
    isEmergency: PropTypes.bool,
    percentProgress: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]).isRequired,
};

ChecklistMenuTitle.defaultProps = {
    isEmergency: false,
};
