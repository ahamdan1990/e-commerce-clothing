import {createSelector} from 'reselect';

const getDirectory = state => state.sections.sections;

export const sectionsSelector = createSelector(
    [getDirectory],
    sections => sections
)