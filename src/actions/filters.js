import { SET_TEXT_FILTER } from './types';

export const setTextFilter = (text = '') => ({
    type: SET_TEXT_FILTER,
    text
  });