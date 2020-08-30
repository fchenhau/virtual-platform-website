import * as types from "./types"

import {
    initialStateFormat
} from "../../lib/redux/reduxStateFormat"


const initialState = {
    email: "",
    password: "",
    subUsersCount: 3,
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
        case types.ADD_SUBUSERS_COUNT: 
            return {
                ...state, 
                subUsersCount: state.subUsersCount + 1
            }
        case types.REMOVE_SUBUSERS_COUNT: 
            return {
                ...state, 
                subUsersCount: state.subUsersCount - 1
            }
        default:
            return state
    }
}

export default AuthenticationReducer;