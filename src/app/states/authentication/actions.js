import * as types from "./types"
import Authentication from "../../apis/authentication"

/**
 * Post Login
 */
export const postLogin = (params = null) => {

    // Call api and determine success or fail
    const apiResponse = Authentication.postLogin();

    // if success, return success type
    if (apiResponse) {
        return {
            type: types.POST_LOGIN_SUCCESS,
            isFetching: false,
            message: 'Login success',
        }
    }

    // if fail, return fail type
    if (!apiResponse) {
        return {
            type: types.POST_LOGIN_FAIL,
            isFetching: false,
            message: 'Fail to login',
        }
    }
};

export const resetPostLogin = () => ({
    type: types.RESET_POST_LOGIN,
});


/**
 * Post Register
 */
export const postRegister = (params = null) => {

    // Call api and determine success or fail
    const apiResponse = Authentication.postRegister();

    // if success, return success type
    if (apiResponse) {
        return {
            type: types.POST_REGISTER_SUCCESS,
            isFetching: false,
            message: 'Register success!',
        }
    }

    // if fail, return fail type
    if (!apiResponse) {
        return {
            type: types.POST_REGISTER_FAIL,
            isFetching: false,
            message: 'Fail to register',
        }
    }
};

export const resetPostRegister = () => ({
    type: types.RESET_POST_REGISTER,
});