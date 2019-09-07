import { FETCH_USERS, FETCH_ONE_USER, CREATE_USER, UPDATE_USER, DELETE_USER, CANCEL, CHANGE_EVENT } from '../actions/types';

const initialState = {
    users: [],
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    gender: 'male',
    updateEvent: false
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_USERS:
            return {
                ...state,
                users: action.payload
            };
        case FETCH_ONE_USER:
            var user = state.users.find(user => user.id === action.payload);
            return {
                ...state,
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                gender: user.gender,
                updateEvent: true
            };
        case CREATE_USER:
            let previousId = 1;
            if (state.users.length > 0) {
                previousId = state.users[state.users.length - 1].id + 1;
            }
            var user = {
                id: previousId,
                firstName: state.firstName,
                lastName: state.lastName,
                email: state.email,
                gender: state.gender
            };
            var users = [...state.users, user];
            return {
                ...state,
                users,
                firstName: '',
                lastName: '',
                email: '',
                gender: 'male'
            };
        case UPDATE_USER:
            var users = state.users.map(user => {
                if (user.id === state.id) {
                    user.id = state.id;
                    user.firstName = state.firstName;
                    user.lastName = state.lastName;
                    user.email = state.email;
                    user.gender = state.gender;
                }
                return user
            });
            return {
                ...state,
                users,
                id: 0,
                firstName: '',
                lastName: '',
                email: '',
                gender: 'male',
                updateEvent: false
            }
        case DELETE_USER:
            var users = state.users.filter(user => user.id !== action.payload);
            return {
                ...state,
                users,
                updateEvent: false
            }
        case CANCEL:
            return {
                ...state,
                id: 0,
                firstName: '',
                lastName: '',
                email: '',
                gender: 'male',
                updateEvent: false
            }
        case CHANGE_EVENT:
            return {
                ...state,
                [action.payload.target.name]: action.payload.target.value
            }
        default:
            return state;
    }
}