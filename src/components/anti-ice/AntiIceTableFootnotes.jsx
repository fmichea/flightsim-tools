import { AntiIceTableFootnote } from 'components/anti-ice/AntiIceTableFootnote';
import React from 'react';
import { styled } from 'styletron-react';

const FootnotesContainer = styled('div', {
    marginTop: '10px',
    marginBottom: '20px',
    fontSize: '0.75em',
});

export const AntiIceTableFootnotes = () => (
    <FootnotesContainer>
        <AntiIceTableFootnote
            footnoteID={1}
            footnote={(
                <>
                    This may be turned or or off depending on configuration. The state shown is the default
                    mode this ice protection system should be in. See optional modes for more information on
                    variations allowed for this setting.
                </>
            )}
        />

        <AntiIceTableFootnote
            footnoteID={2}
            footnote={(
                <>
                    This is the state for this specific configuration, and does not correspond to the default
                    configuration.
                </>
            )}
        />

        <AntiIceTableFootnote
            footnoteID={3}
            footnote={(
                <>
                    This system is not implemented. State shown is the intended mode, but it may not be
                    achieved in MSFS. See picture below for actual state possible in MSFS.
                </>
            )}
        />
    </FootnotesContainer>
);
