import DirectoryActionTypes from './directory.types';

export const updateSections = collectionMap => ({
    type:DirectoryActionTypes.UPDATE_SECTIONS,
    payload:collectionMap
})