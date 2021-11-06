import React from 'react';
import PropTypes from 'prop-types';
import { Tag } from 'antd';
import { isNotNullOrUndefined } from 'lib/isNullOrUndefined';
import { ChecklistDataItemTagsPropTypes } from 'components/checklists/propTypes';

const tagStyle = { fontFamily: 'Monaco' };

export const ChecklistListItemTags = ({
    tagsData,
}) => Array.from(tagsData)
    .filter((tag) => !tag.hidden)
    .map((tag) => (
        <Tag key={tag.uid} color={tag.color} style={tagStyle}>
            {isNotNullOrUndefined(tag.title) ? tag.title : tag.uid}
        </Tag>
    ));

ChecklistListItemTags.propTypes = {
    tagsData: PropTypes.arrayOf(ChecklistDataItemTagsPropTypes).isRequired,
};
