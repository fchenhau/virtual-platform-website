import * as types from "./types";

/**
 * ---------------------
 * Get Request Example
 * ---------------------
 */
export const getRequest = (params = null) => {

    // Call api and determine success or fail
    const apiResponse = null;

    // if success, return success type
    if (apiResponse) {
        return {
            type: types.GET_REQUEST_SUCCESS,
            payload: {
                data
            }
        }
    }

    // if fail, return fail type
    if (!apiResponse) {
        return {
            type: types.GET_REQUEST_FAIL,
            payload: {
                error
            }
        }
    }

    // default, return get type
    return {
        type: types.GET_REQUEST,
        payload: {
            params
        }
    }
};

export const resetGetRequest = () => ({
    type: types.RESET_GET_REQUEST
});
