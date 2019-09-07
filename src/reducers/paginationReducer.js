import { SELECT_PAGE } from '../actions/types';

const initialState = {
    startElement: 0,
    numberOfUsersOnePage: 5
}

export default function(state = initialState, action) {
    switch(action.type) {
        case SELECT_PAGE:
            var startElement = state.numberOfUsersOnePage * (action.payload - 1)
            return {
                ...state,
                startElement
            };
        default:
            return state;
    }
}