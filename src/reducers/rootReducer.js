import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import infoReducer from './infoReducer';
import paginationReducer from './paginationReducer';

export default combineReducers({
    users: usersReducer,
    info: infoReducer,
    pagination: paginationReducer
});