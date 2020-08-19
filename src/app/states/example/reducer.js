import * as types from "./types"

import {
    initialStateFormat
} from "../../lib/redux/reduxStateFormat"


const initialState = {
    getRequestResponse: initialStateFormat,
    postRequestResponse: initialStateFormat,
}


const ExampleReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.GET_REQUEST: 
        case types.GET_REQUEST_SUCCESS: 
        case types.GET_REQUEST_FAIL: 
        case types.RESET_GET_REQUEST: 
            return {
                ...state,
                getRequestResponse: Object.assign({}, state.getRequestResponse, action)
            }
        case types.POST_REQUEST: 
        case types.POST_REQUEST_SUCCESS: 
        case types.POST_REQUEST_FAIL: 
        case types.RESET_POST_REQUEST: 
            return {
                ...state,
                postRequestResponse: Object.assign({}, state.postRequestResponse, action)
            }
        default:
            return state
    }
}

export default ExampleReducer;