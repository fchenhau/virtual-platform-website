import * as types from "./types";

/**
 * Get Profile
 */
export const getProfile = (params = null) => {

    // Call api and determine success or fail
    const apiResponse = null;

    // if success, return success type
    if (apiResponse) {
        return {
            type: types.GET_PROFILE_SUCCESS,
            payload: {
                data
            }
        }
    }

    // if fail, return fail type
    if (!apiResponse) {
        return {
            type: types.GET_PROFILE_FAIL,
            payload: {
                error
            }
        }
    }

    // default, return get type
    return {
        type: types.GET_PROFILE,
        payload: {
            params
        }
    }
    
};

export const resetGetProfile = () => ({
    type: types.RESET_GET_PROFILE
});
