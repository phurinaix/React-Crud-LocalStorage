import { FETCH_USERS, FETCH_ONE_USER, CREATE_USER, UPDATE_USER, DELETE_USER, CANCEL, CHANGE_EVENT } from './types';

export const fetchUsers = () => dispatch => {
    let promise = new Promise((resolve, reject) => {
        let users = JSON.parse(localStorage.getItem("users"));
        if (!Array.isArray(users)) {
            users = [];
        }
        resolve(users);
    })
    return promise.then(response => {
        dispatch({
            type: FETCH_USERS,
            payload: response
        })
        return true;
    });
};

export const fetchOneUser = (id) => dispatch => {
    dispatch({
        type: FETCH_ONE_USER,
        payload: id
    })
};

export const changeEvent = (e) => dispatch => {
    dispatch({
        type: CHANGE_EVENT,
        payload: e
    })
};

export const createUser = () => dispatch => {
    return new Promise((resolve, reject) => {
        resolve(
            dispatch({
                type: CREATE_USER,
                payload: null
            })
        )
    });
};

export const updateUser = () => dispatch => {
    return new Promise((resolve, reject) => {
        resolve(
            dispatch({
                type: UPDATE_USER,
                payload: null
            })
        )
    });
};

export const deleteUser = (id) => dispatch => {
    return new Promise((resolve, reject) => {
        resolve(
            dispatch({
                type: DELETE_USER,
                payload: id
            })
        )
    });
};

export const cancel = () => dispatch => {
    dispatch({
        type: CANCEL,
        payload: null
    })
};