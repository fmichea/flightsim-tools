import React from 'react';

import { CASMessage } from 'components/lib/CASMessage';
import { KeyboardInputs } from 'components/lib/KeyboardInputs';
import { MFD_CJ4 } from 'components/lib/vernacular/cj4';
import { FMS } from 'components/lib/vernacular/common';
import { ChecklistItems } from 'lib/checklist/data/listItems';
import { ChecklistTags } from 'lib/checklist/data/tags';
import { createTransformedMapping } from 'lib/checklist/data/transforms';

const addCJ4EXTTags = (value) => ({
    ...value,
    tags: [...value.tags, ChecklistTags.CJ4, ChecklistTags.EXTENSION],
});

export const CJ4ExtChecklistItemsData = createTransformedMapping(addCJ4EXTTags)([
    {
        uid: ChecklistItems.CJ4EXT_BEFORE_START_EXTERNAL_POWER,
        title: 'External Power',
        state: 'AS REQUIRED',
        moreInfoShort: (
            <>
                Battery life without another source of power is around 10 to 15 minutes. If
                engines are expected to be started within that timeframe, this step is not
                necessary, otherwise it should be done.
                <br />
                <br />
                In real life, cost of ground power would have to be weighted against cost of
                burning a bit more fuel on the ground before taxi and using engine as a source of power.
                <br />
                <br />
                External Power can be enabled on
                {' '}
                {FMS}
                {' '}
                with the following set of keypresses:
                {' '}
                <KeyboardInputs inputs={['IDX', 'NEXT', 'LSK 3 (MOD SET)', 'LSK 4 (Ground Power Unit to ON)']} />
                .
                {' '}
                <CASMessage level="warning">BAT AMP</CASMessage>
                {' '}
                warning should disappear from
                {' '}
                {MFD_CJ4}
                .
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4EXT_BEFORE_TAKEOFF_RUNWAY_HEADING,
        title: 'Autopilot Heading Setting',
        state: 'RUNWAY HEADING',
        moreInfoShort: (
            <>
                Optionally, it can be a good idea to do takeoff with runway heading pre-programmed
                into autopilot. This does not mean enabling heading mode, but simply set the heading
                setting to the runway heading so that heading mode can easily be enabled after take-off
                if necessary.
            </>
        ),
    },
    {
        uid: ChecklistItems.CJ4EXT_DESCENT_INTERIOR_LIGHTS,
        title: 'Interior / Panel Lights',
        state: 'AS REQUIRED',
        moreInfoShort: (
            <>
                When starting descent above cloud layer, you should expect much lower light inside cockpit after
                passing the cloud layer. Turn on Panel backlights using the middle rotary button just above the
                exterior lights panel anti-clockwise.
            </>
        ),
    },
]);
