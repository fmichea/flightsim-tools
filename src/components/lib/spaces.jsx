import React from 'react';

import { styled } from 'styletron-react';

import { isNullOrUndefined } from 'lib/isNullOrUndefined';

export const VWSpace = styled('span', (props) => ({
    width: isNullOrUndefined(props.$width) ? '1em' : props.$width,
    display: 'inline-block',
}));

export const ThickSpace = () => <VWSpace $width="1.15em" />;
export const ThinSpace = () => <VWSpace $width=".15em" />;

export const VerticalSpace = styled('div', {
    height: '20px',
});
