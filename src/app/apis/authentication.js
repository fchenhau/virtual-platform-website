import apiAction from "../lib/apiAction"
import { calculateXChecksum, calculateXSignature } from "../helper/checksum"

const Authentication = {

    postLogin: (email, password, eventId = 1) => {
        return new Promise((resolve, reject) => {
            /** Define API Url Path */
            const url = `/users/login`;

            const data = {
                'email': email, 
                'password': password, 
                'event_id': eventId
            }

            apiAction.post(url, data)
                .then(response => resolve(response.data))
                .catch(err => reject(err.response))
        })
    },

    postRegister: (mainUser = {}, subUsers = [], eventId = 1) => {
        return new Promise((resolve, reject) => {
            /** Define API Url Path */
            const url = '/users';

            const config = {
                headers: {
                    'x-checksum': calculateXChecksum(mainUser, subUsers),
                    'x-signature': calculateXSignature(mainUser, subUsers),
                }
            }

            const data = {
                "event_id": eventId,
                "users": { 
                    "main": mainUser, 
                    "sub": subUsers 
                }
            }

            apiAction.post(url, data, config)
                .then(response => resolve(response.data))
                .catch(err => reject(err))
        })
    },
};

export default Authentication;
