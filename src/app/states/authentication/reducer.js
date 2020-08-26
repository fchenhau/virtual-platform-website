import * as types from "./types"

import {
    initialStateFormat
} from "../../lib/redux/reduxStateFormat"


const initialState = {
    postLoginResponse: initialStateFormat,
    postRegisterResponse: initialStateFormat,
}


const AuthenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        // Post Login
        case types.POST_LOGIN_SUCCESS: 
        case types.POST_LOGIN_FAIL:
            return {
                ...state,
                postLoginResponse: Object.assign({}, state.postLoginResponse, action)
            }
        case types.RESET_POST_LOGIN: 
            return {
                ...state,
                postLoginResponse: Object.assign({}, initialStateFormat)
            }
        //  Post Register
        case types.POST_REGISTER_SUCCESS: 
        case types.POST_REGISTER_FAIL: 
            return {
                ...state,
                postRegisterResponse: Object.assign({}, state.postRegisterResponse, action)
            }
        case types.RESET_POST_REGISTER: 
            return {
                ...state,
                postRegisterResponse: Object.assign({}, initialStateFormat)
            }
        default:
            return state
    }
}

export default AuthenticationReducer;