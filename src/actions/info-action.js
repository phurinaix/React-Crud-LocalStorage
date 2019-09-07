import { FETCH_NATIONALITY } from './types';

export const getNationality = () => dispatch => {
    // เพิ้มจำนวนสัญชาติที่นี่ หรือจะเรียก API ก็ได้
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