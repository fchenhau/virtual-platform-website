import apiAction from "../lib/apiAction"

const Events = {

    getSpeakerListing: (eventId = 1) => {
        return new Promise((resolve, reject) => {
            /** Define API Url Path */
            const url = `/events/${eventId}/speakers`;

            apiAction.get(url)
                .then(response => resolve(response.data))
                .catch(err => reject(err.response))
        })
    },
};

export default Events;
