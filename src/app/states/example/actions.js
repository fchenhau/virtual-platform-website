import * as types from "./types"
import { initialPayload } from "../../lib/redux/reduxStateFormat"
import Example from "../../apis/example"

/**
 * ---------------------
 * Get Request Example
 * ---------------------
 */
export const getRequest = (params = null) => {

    // Call api and determine success or fail
    const apiResponse = Example.getRequest();

    // if success, return success type
    if (apiResponse) {
        return {
            type: types.GET_REQUEST_SUCCESS,
            isFetching: false,
            message: 'Get request success!',
            apiData: ['sample_data_1', 'sample_data_2', 'sample_data_3']
        }
    }

    // if fail, return fail type
    if (!apiResponse) {
        return {
            type: types.GET_REQUEST_FAIL,
            isFetching: false,
            message: 'Fail to get request',
        }
    }

    // default, return get type
    return {
        type: types.GET_REQUEST,
        isFetching: true,
        message: 'Getting request...'
    }
};

export const resetGetRequest = () => ({
    type: types.RESET_GET_REQUEST,
    payload: initialPayload
});


/**
 * ---------------------
 * Post Request Example
 * ---------------------
 */
export const postRequest = (params = null) => {

    // Call api and determine success or fail
    const apiResponse = Example.postRequest();

    // if success, return success type
    if (apiResponse) {
        return {
            type: types.POST_REQUEST_SUCCESS,
            isFetching: false,
            message: 'Post request success!',
            apiData: ['sample_data_1', 'sample_data_2', 'sample_data_3']
        }
    }

    // if fail, return fail type
    if (!apiResponse) {
        return {
            type: types.POST_REQUEST_FAIL,
            isFetching: false,
            message: 'Fail to post request',
        }
    }

    // default, return action type
    return {
        type: types.POST_REQUEST,
        isFetching: true,
        message: 'Posting request...'
    }
};

export const resetPostRequest = () => ({
    type: types.RESET_POST_REQUEST,
    payload: initialPayload
});