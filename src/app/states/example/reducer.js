import * as types from "./types";

// import {
//     apiResponse
// } from "../utility/stateFormat";

const initialState = {
    feedback: '',
};

const CommonReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_FEEDBACK: {
            return {
                ...state,
                feedback: action.payload.feedback
            }
        }
        default:
            return state;
    }
}

export default CommonReducer;