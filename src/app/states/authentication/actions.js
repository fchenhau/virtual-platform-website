import * as types from "./types"

export const setEmail = (email) => ({
    type: types.SET_EMAIL,
    payload: {
        email
    }
});

export const setPassword = (password) => ({
    type: types.SET_PASSWORD,
    payload: {
        password
    }
});


export const setSubUser = (index, data) => ({
    type: types.SET_SUBUSER,
    payload: {
        index, data
    }
});

export const addSubUsersCount = () => ({
    type: types.ADD_SUBUSERS_COUNT,
});

export const removeSubUsersCount = () => ({
    type: types.REMOVE_SUBUSERS_COUNT,
});
