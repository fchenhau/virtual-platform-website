import * as types from "./types"

import {
    initialStateFormat
} from "../../lib/redux/reduxStateFormat"


const initialState = {
    email: "",
    password: "",
}


const AuthenticationReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_EMAIL: 
            return {
                ...state, 
                email: action.payload.email
            }
        case types.SET_PASSWORD: 
            return {
                ...state, 
                password: action.payload.password
            }
        default:
            return state
    }
}

export default AuthenticationReducer;