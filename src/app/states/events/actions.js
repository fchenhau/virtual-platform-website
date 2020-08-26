import * as types from "./types"
import Events from "../../apis/events"

/**
 * Get Speaker Listing
 */
export const getSpeakerListing = (params = null) => {

    // Call api and determine success or fail
    // Events.getSpeakerListing()
    //     .then(response => {
    //         const { code: responseCode } = response;
    //         console.log('response', response);

    //         // if success, return success type
    //         if (responseCode === 200) {
    //             const { data } = response;
                
    //             return {
    //                 type: types.GET_SPEAKER_LISTING_SUCCESS,
    //                 isFetching: false,
    //                 message: 'Get speaker listing success',
    //                 apiData: data
    //             }
    //         }
            
    //         // if fail, return fail type
    //         if (responseCode !== 200) {
    //             const { errors } = response;

    //             return {
    //                 type: types.GET_SPEAKER_LISTING_FAIL,
    //                 isFetching: false,
    //                 message: `Get Speaker Listing: ${responseCode} => ${errors}`,
    //             }
    //         }
    //     });
};

export const getSpeakerListingSuccess = (data) => ({
    type: types.GET_SPEAKER_LISTING_SUCCESS,
    isFetching: false,
    message: 'Get speaker listing success',
    apiData: data
})

export const getSpeakerListingFail = (error) => ({
    type: types.GET_SPEAKER_LISTING_SUCCESS,
    isFetching: false,
    message: error,
})

export const resetGetSpeakerListing = () => ({
    type: types.RESET_GET_SPEAKER_LISTING,
});
