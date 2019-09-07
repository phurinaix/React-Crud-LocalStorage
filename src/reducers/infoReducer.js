import { FETCH_NATIONALITY } from '../actions/types';

const initialState = {
    nationality: []
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_NATIONALITY:
            return {
                ...state,
                nationality: action.payload
            };
        default:
            return state;
    }
}