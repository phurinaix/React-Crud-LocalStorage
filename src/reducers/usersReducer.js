import { FETCH_USERS, FETCH_ONE_USER, CREATE_USER, UPDATE_USER, DELETE_USER, CANCEL, CHANGE_EVENT } from '../actions/types';

const initialState = {
    users: [],
    id: 0,
    title: '',
    firstName: '',
    lastName: '',
    birthday: '',
    nationality: '',
    citizenId: '',
    gender: 'male',
    phone: '',
    passportNumber: '',
    salary: 0,
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
                title: user.title,
                firstName: user.firstName,
                lastName: user.lastName,
                birthday: user.birthday,
                nationality: user.nationality,
                citizenId: user.citizenId,
                gender: user.gender,
                phone: user.phone,
                passportNumber: user.passportNumber,
                salary: user.salary,
                updateEvent: true
            };
        case CREATE_USER:
            let previousId = 1;
            if (state.users.length > 0) {
                previousId = state.users[state.users.length - 1].id + 1;
            }
            var user = {
                id: previousId,
                title: state.title,
                firstName: state.firstName,
                lastName: state.lastName,
                birthday: state.birthday,
                nationality: state.nationality,
                citizenId: state.citizenId,
                gender: state.gender,
                phone: state.phone,
                passportNumber: state.passportNumber,
                salary: state.salary,
            };
            var users = [...state.users, user];
            return {
                ...state,
                users,
                title: '',
                firstName: '',
                lastName: '',
                birthday: '',
                nationality: '',
                citizenId: '',
                gender: '',
                phone: '',
                passportNumber: '',
                salary: '',
            };
        case UPDATE_USER:
            var users = state.users.map(user => {
                if (user.id === state.id) {
                    user.id = state.id;
                    user.title = state.title;
                    user.firstName = state.firstName;
                    user.lastName = state.lastName;
                    user.birthday = state.birthday;
                    user.nationality = state.nationality;
                    user.citizenId = state.citizenId;
                    user.gender = state.gender;
                    user.phone = state.phone;
                    user.passportNumber = state.passportNumber;
                    user.salary = state.salary;
                }
                return user
            });
            return {
                ...state,
                users,
                id: 0,
                title: '',
                firstName: '',
                lastName: '',
                birthday: '',
                nationality: '',
                citizenId: '',
                gender: '',
                phone: '',
                passportNumber: '',
                salary: '',
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
                title: '',
                firstName: '',
                lastName: '',
                birthday: '',
                nationality: '',
                citizenId: '',
                gender: '',
                phone: '',
                passportNumber: '',
                salary: '',
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