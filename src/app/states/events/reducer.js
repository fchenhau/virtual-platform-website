import * as types from "./types"

import {
    initialStateFormat
} from "../../lib/redux/reduxStateFormat"


const initialState = {
    getSpeakerListingResponse: initialStateFormat,
}


const EventReducer = (state = initialState, action) => {
    switch (action.type) {
        // Get Speaker Listing
        case types.GET_SPEAKER_LISTING_SUCCESS: 
        case types.GET_SPEAKER_LISTING_FAIL:
            return {
                ...state,
                getSpeakerListingResponse: Object.assign({}, state.getSpeakerListingResponse, action)
            }
        case types.RESET_GET_SPEAKER_LISTING: 
            return {
                ...state,
                getSpeakerListingResponse: Object.assign({}, initialStateFormat)
            }
        default:
            return state
    }
}

export default EventReducer;