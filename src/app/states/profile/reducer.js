import * as types from "./types";
import { apiResponse } from "../../config/reduxStateFormat";

const initialState = {
    getProfileResponse: apiResponse,
    postEditProfileResponse: apiResponse,
    getEmergencyContactResponse: apiResponse,
    postEditEmergencyContactResponse: apiResponse,
    postChangePasswordResponse: apiResponse,
};

const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        /**
         * Get Profile
         */
        case types.GET_PROFILE: {
            return {
                ...state,
                getProfileResponse: Object.assign({}, state.getProfileResponse, {
                    type: types.GET_PROFILE,
                    isFetching: true
                })
            }
        }
        case types.GET_PROFILE_SUCCESS: {
            return {
                ...state,
                getProfileResponse: Object.assign({}, state.getProfileResponse, {
                    type: types.GET_PROFILE_SUCCESS,
                    isFetching: false,
                    apiData: action.payload.data
                })
            }
        }
        case types.RESET_GET_PROFILE: {
            return {
                ...state,
                getProfileResponse: initialState.getProfileResponse
            }
        }

        /**
         * Post Edit Profile
         */
        case types.POST_EDIT_PROFILE: {
            return {
                ...state,
                postEditProfileResponse: Object.assign({}, state.postEditProfileResponse, {
                    type: types.POST_EDIT_PROFILE,
                    isFetching: true
                })
            }
        }
        case types.POST_EDIT_PROFILE_SUCCESS: {
            return {
                ...state,
                postEditProfileResponse: Object.assign({}, state.postEditProfileResponse, {
                    type: types.POST_EDIT_PROFILE_SUCCESS,
                    isFetching: false,
                    apiData: action.payload.data
                })
            }
        }
        case types.POST_EDIT_PROFILE_FAIL: {
            return {
                ...state,
                postEditProfileResponse: Object.assign({}, state.postEditProfileResponse, {
                    type: types.POST_EDIT_PROFILE_FAIL,
                    isFetching: false,
                    message: action.payload.err
                })
            }
        }
        case types.RESET_POST_EDIT_PROFILE: {
            return {
                ...state,
                postEditProfileResponse: initialState.postEditProfileResponse
            }
        }

        /**
         * Get Emergency Contact
         */
        case types.GET_EMERGENCY_CONTACT: {
            return {
                ...state,
                getEmergencyContactResponse: Object.assign({}, state.getEmergencyContactResponse, {
                    type: types.GET_EMERGENCY_CONTACT,
                    isFetching: true
                })
            }
        }
        case types.GET_EMERGENCY_CONTACT_SUCCESS: {
            return {
                ...state,
                getEmergencyContactResponse: Object.assign({}, state.getEmergencyContactResponse, {
                    type: types.GET_EMERGENCY_CONTACT_SUCCESS,
                    isFetching: false,
                    apiData: action.payload.data
                })
            }
        }
        case types.RESET_GET_EMERGENCY_CONTACT: {
            return {
                ...state,
                getEmergencyContactResponse: initialState.getEmergencyContactResponse
            }
        }

        /**
         * Post Edit Emergency Contact
         */
        case types.POST_EDIT_EMERGENCY_CONTACT: {
            return {
                ...state,
                postEditEmergencyContactResponse: Object.assign({}, state.postEditEmergencyContactResponse, {
                    type: types.POST_EDIT_EMERGENCY_CONTACT,
                    isFetching: true
                })
            }
        }
        case types.POST_EDIT_EMERGENCY_CONTACT_SUCCESS: {
            return {
                ...state,
                postEditEmergencyContactResponse: Object.assign({}, state.postEditEmergencyContactResponse, {
                    type: types.POST_EDIT_EMERGENCY_CONTACT_SUCCESS,
                    isFetching: false,
                    apiData: action.payload.data
                })
            }
        }
        case types.POST_EDIT_EMERGENCY_CONTACT_FAIL: {
            return {
                ...state,
                postEditEmergencyContactResponse: Object.assign({}, state.postEditEmergencyContactResponse, {
                    type: types.POST_EDIT_EMERGENCY_CONTACT_FAIL,
                    isFetching: false,
                    message: action.payload.err
                })
            }
        }
        case types.RESET_POST_EDIT_EMERGENCY_CONTACT: {
            return {
                ...state,
                postEditEmergencyContactResponse: initialState.postEditEmergencyContactResponse
            }
        }

        /**
         * Post Change Password
         */
        case types.POST_CHANGE_PASSWORD: {
            return {
                ...state,
                postChangePasswordResponse: Object.assign({}, state.postChangePasswordResponse, {
                    type: types.POST_CHANGE_PASSWORD,
                    isFetching: true
                })
            }
        }
        case types.POST_CHANGE_PASSWORD_SUCCESS: {
            return {
                ...state,
                postChangePasswordResponse: Object.assign({}, state.postChangePasswordResponse, {
                    type: types.POST_CHANGE_PASSWORD_SUCCESS,
                    isFetching: false,
                    apiData: action.payload.data
                })
            }
        }
        case types.POST_CHANGE_PASSWORD_FAIL: {
            return {
                ...state,
                postChangePasswordResponse: Object.assign({}, state.postChangePasswordResponse, {
                    type: types.POST_CHANGE_PASSWORD_FAIL,
                    isFetching: false,
                    message: action.payload.err
                })
            }
        }
        case types.RESET_POST_CHANGE_PASSWORD: {
            return {
                ...state,
                postChangePasswordResponse: initialState.postChangePasswordResponse
            }
        }

        default:
            return state;
    }
}

export default ProfileReducer;