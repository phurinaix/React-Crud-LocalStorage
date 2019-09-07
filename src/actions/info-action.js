import { FETCH_NATIONALITY } from './types';

export const getNationality = () => dispatch => {
    let nationality = [
        'American',
        'English',
        'Japanese',
        'Laotian',
        'Malaysian',
        'Russian',
        'Thai'
    ];
    dispatch({
        type: FETCH_NATIONALITY,
        payload: nationality
    })
};