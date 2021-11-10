import React, { useMemo } from 'react';

import { useHistory } from 'react-router';
import { styled } from 'styletron-react';

const logoSize = 48;

const LogoContainer = styled('div', {
    float: 'left',
    color: 'white',
    margin: '8px 24px 8px 0',
    height: `${logoSize}px`,
    fontSize: '1.5em',
    lineHeight: `${logoSize}px`,
    fontWeight: 'bold',
    verticalAlign: 'middle',
    display: 'inline-block',
    ':hover': {
        color: 'rgba(255, 255, 255, .8)',
    },
});

export const HeaderLogo = () => {
    const history = useHistory();

    const clickHandler = useMemo(() => () => history.push('/'), [history]);

    return <LogoContainer onClick={clickHandler}>FlightSim Tools</LogoContainer>;
};
