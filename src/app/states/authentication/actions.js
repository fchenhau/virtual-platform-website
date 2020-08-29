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
