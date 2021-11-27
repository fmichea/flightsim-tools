import React, { useEffect, useMemo, useState } from 'react';

import { CheckOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import PropTypes from 'prop-types';
import { styled, withStyle } from 'styletron-react';

const ButtonTextContainer = styled('div', {
    position: 'relative',
});

const ButtonTextToggle = styled('div', (props) => ({
    opacity: props.$isDisplayed ? undefined : 0,
    minWidth: props.$minWidth ? '55px' : undefined,
}));

const ButtonSecondaryTextToggle = withStyle(ButtonTextToggle, {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
});

const buttonStates = Object.freeze({
    PRIMARY: 'primary',
    CONFIRMATION: 'confirmation',
    SUCCESS: 'success',
});

export const ButtonWithConfirm = (props) => {
    const { children, onClick, ...otherProps } = props;

    const [buttonState, setButtonState] = useState(buttonStates.PRIMARY);

    const onClickReal = useMemo(
        () => () => {
            if (buttonState === buttonStates.CONFIRMATION) {
                onClick();
                setButtonState(buttonStates.SUCCESS);
            } else {
                setButtonState(buttonStates.CONFIRMATION);
            }
        },
        [buttonState, setButtonState],
    );

    useEffect(
        // eslint-disable-next-line consistent-return
        () => {
            if (buttonState === buttonStates.CONFIRMATION) {
                const tid = setTimeout(() => setButtonState(buttonStates.PRIMARY), 1250);
                return () => clearTimeout(tid);
            } if (buttonState === buttonStates.SUCCESS) {
                const tid = setTimeout(() => setButtonState(buttonStates.PRIMARY), 750);
                return () => clearTimeout(tid);
            }
        },
        [buttonState, setButtonState],
    );

    return (
        <Button onClick={onClickReal} {...otherProps}>
            <ButtonTextContainer>
                <ButtonTextToggle $isDisplayed={buttonState === buttonStates.PRIMARY} $minWidth>
                    {children}
                </ButtonTextToggle>
                <ButtonSecondaryTextToggle $isDisplayed={buttonState === buttonStates.CONFIRMATION}>
                    Confirm
                </ButtonSecondaryTextToggle>
                <ButtonSecondaryTextToggle $isDisplayed={buttonState === buttonStates.SUCCESS}>
                    <CheckOutlined />
                </ButtonSecondaryTextToggle>
            </ButtonTextContainer>
        </Button>
    );
};

ButtonWithConfirm.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};
