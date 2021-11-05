import { styled, withStyle } from 'styletron-react';

export const ContentContainer = styled('div', {
    padding: '0px 20px',
    width: '100%',
});

export const CenteredContentContainer = withStyle(ContentContainer, {
    maxWidth: '1200px',
    margin: 'auto',
});
