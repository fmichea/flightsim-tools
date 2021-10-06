import React from 'react';
import {
    RunwayContaminationDepth,
    RunwayContaminationExtent,
    RunwayDeposit,
    RunwaySurfaceFriction,
} from 'lib/metar/enums';
import { ExternalLink } from 'components/lib/ExternalLink';
import { RunwayStatePropTypes } from 'components/metar/renderers/runwayState/propTypes';
import { pick } from 'lib/pick';

const depositDescriptions = {
    [RunwayDeposit.CLEAR_AND_DRY]: 'clear and dry',
    [RunwayDeposit.DAMP]: 'damp',
    [RunwayDeposit.WET]: 'wet with water patches',
    [RunwayDeposit.RIME_AND_FROST]: (
        <>
            covered with
            <ExternalLink href="https://en.wikipedia.org/wiki/Rime_ice">rime</ExternalLink>
            {' '}
            and frost
        </>
    ),
    [RunwayDeposit.DRY_SNOW]: 'covered with dry snow',
    [RunwayDeposit.WET_SNOW]: 'covered with wet snow',
    [RunwayDeposit.SLUSH]: (
        <>
            covered with
            <ExternalLink href="https://en.wikipedia.org/wiki/Slush">slush</ExternalLink>
        </>
    ),
    [RunwayDeposit.ICE]: 'icy',
    [RunwayDeposit.COMPACTED_SNOW]: 'covered with compacted snow',
    [RunwayDeposit.FROZEN_RUTS]: 'covered with frozen ruts',
    [RunwayDeposit.NOT_REPORTED]: 'contaminated with unreported substance',
};

const renderDeposit = ({ depositP, deposit }) => (
    <>
        {depositDescriptions[depositP]}
        {' '}
        (
        {deposit}
        )
    </>
);

const contaminationExtentDescriptions = {
    [RunwayContaminationExtent.BELOW_TEN]: 'Below 10%',
    [RunwayContaminationExtent.TEN_TO_TWENTY_FIVE]: 'Between 11 and 25%',
    [RunwayContaminationExtent.TWENTY_FIVE_TO_FIFTY]: 'Between 26 and 50%',
    [RunwayContaminationExtent.ABOVE_FIFTY]: 'Above 50%',
    [RunwayContaminationExtent.NOT_REPORTED]: 'An unreported amount',
    [RunwayContaminationExtent.UNKNOWN_RESERVED]: 'An unknown amount (reserved value)',
};

const renderContaminationExtent = ({ extentP, extent }) => (
    <>
        {contaminationExtentDescriptions[extentP]}
        {' '}
        (
        {extent}
        )
    </>
);

const contaminationDepthDescriptions = {
    [RunwayContaminationDepth.TEN_CM]: '10 centimeters deep',
    [RunwayContaminationDepth.FIFTEEN_CM]: '15 centimeters deep',
    [RunwayContaminationDepth.TWENTY_CM]: '20 centimeters deep',
    [RunwayContaminationDepth.TWENTY_FIVE_CM]: '25 centimeters deep',
    [RunwayContaminationDepth.THIRTY_CM]: '30 centimeters deep',
    [RunwayContaminationDepth.THIRTY_FIVE_CM]: '35 centimeters deep',
    [RunwayContaminationDepth.FORTY_CM]: 'more than 40 centimeters deep',
    [RunwayContaminationDepth.NOT_OPERATIONAL]: 'of an unreported depth above operational constraints',
    [RunwayContaminationDepth.NOT_REPORTED]: 'of an unreported depth',
};

const renderContaminationDepth = ({ depthP, depth }) => {
    const desc = pick(
        contaminationDepthDescriptions[depthP],
        <>
            {depthP}
            {' '}
            millimeters deep
        </>,
    );

    return (
        <>
            {desc}
            {' '}
            (
            {depth}
            )
        </>
    );
};

const frictionDescriptions = {
    [RunwaySurfaceFriction.BRAKING_ACTION_POOR]: 'Braking action is described as poor',
    [RunwaySurfaceFriction.BRAKING_ACTION_MEDIUM_POOR]: 'Braking action is described as poor to medium',
    [RunwaySurfaceFriction.BRAKING_ACTION_MEDIUM]: 'Braking action is described as medium',
    [RunwaySurfaceFriction.BRAKING_ACTION_MEDIUM_GOOD]: 'Braking action is described as medium to good',
    [RunwaySurfaceFriction.BRAKING_ACTION_GOOD]: 'Braking action is described as good',
    [RunwaySurfaceFriction.UNRELIABLE]: 'Braking action reports are unreliable',
    [RunwaySurfaceFriction.UNKNOWN_RESERVED]: 'Unknown reserved braking action value was used',
    [RunwaySurfaceFriction.NOT_REPORTED]: 'Braking action could not reported or runway is not operational',
};

const renderFriction = ({ frictionP, friction }) => {
    const frictionDesc = pick(
        frictionDescriptions[frictionP],
        <>
            Friction coefficient is
            {' '}
            {frictionP}
            /1
        </>,
    );

    return (
        <>
            {frictionDesc}
            {' '}
            (
            {friction}
            ).
        </>
    );
};

export const RunwayStateShort = ({
    data: {
        runwayP,
        depositP,
        extentP,
        depthP,
        frictionP,
    },
    prettyArgs: {
        runway,
        deposit,
        extent,
        depth,
        friction,
    },
}) => (
    <>
        {renderContaminationExtent({ extentP, extent })}
        {' '}
        of runway
        {' '}
        {runwayP}
        {' '}
        (
        {runway}
        ) is
        {' '}
        {renderDeposit({ depositP, deposit })}
        . Coverage is
        {' '}
        {renderContaminationDepth({ depthP, depth })}
        .
        {' '}
        {renderFriction({ frictionP, friction })}
    </>
);

RunwayStateShort.propTypes = RunwayStatePropTypes;
