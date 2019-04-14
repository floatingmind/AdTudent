import { combineReducers } from 'redux';
import advertisementReducer from './advertisementReducer';
import authReducer from './authReducer';
import filtersReducer from './filtersReducer';

export default combineReducers({
    auth: authReducer,
    advertisements: advertisementReducer,
    filters: filtersReducer
});