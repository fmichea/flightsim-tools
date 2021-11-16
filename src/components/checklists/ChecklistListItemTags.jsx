import React from 'react';

import { Tag } from 'antd';
import PropTypes from 'prop-types';
import { useStyletron } from 'styletron-react';

import { ChecklistDataItemTagsPropTypes } from 'components/checklists/propTypes';
import { isNotNullOrUndefined } from 'lib/isNullOrUndefined';

const tagStyle = {
    fontFamily: 'Monaco',
    fontSize: '.8em',
};

const tagStyleLast = {
    ...tagStyle,
    marginRight: '0',
};

export const ChecklistListItemTags = ({
    tagsData,
}) => {
    const [css] = useStyletron();

    const filteredTags = Array.from(tagsData).filter((tag) => !tag.hidden);

    return filteredTags.map((tag, idx) => {
        const isLast = idx === filteredTags.length - 1;

        return (
            <Tag key={tag.uid} color={tag.color} className={css(isLast ? tagStyleLast : tagStyle)}>
                {isNotNullOrUndefined(tag.title) ? tag.title : tag.uid}
            </Tag>
        );
    });
};

ChecklistListItemTags.propTypes = {
    tagsData: PropTypes.arrayOf(ChecklistDataItemTagsPropTypes).isRequired,
};
