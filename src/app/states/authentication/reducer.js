import * as types from "./types"
import { subUserProps } from "../../config/constant"
import { initialStateFormat } from "../../lib/redux/reduxStateFormat"


const initialState = {
    email: "",
    password: "",
    subUsers: [
        subUserProps
    ]
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
            let newAddedSubUsersArray = state.subUsers;
            newAddedSubUsersArray.push(subUserProps);
            
            return {
                ...state, 
                subUsers: [...newAddedSubUsersArray]
            }
        case types.REMOVE_SUBUSERS_COUNT: 
            let newRemovedSubUsersArray = state.subUsers;
            newRemovedSubUsersArray.pop();
            
            return {
                ...state, 
                subUsers: [...newRemovedSubUsersArray]
            }

        case types.SET_SUBUSER: 
            const { index, data } = action.payload;
            state.subUsers[index] = { ...state.subUsers[index], ...data };

            return {
                ...state, 
                subUsers: [...state.subUsers]
            }
        default:
            return state
    }
}

export default AuthenticationReducer;