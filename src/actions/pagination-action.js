import { SELECT_PAGE } from './types';

export const selectPage = (pageNumber) => dispatch => {
    dispatch({
        type: SELECT_PAGE,
        payload: pageNumber
    })
};