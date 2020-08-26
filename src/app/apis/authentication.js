import apiAction from "../lib/apiAction"

const Authentication = {

    postLogin: (username, password, eventId = 1) => {
        return new Promise((resolve, reject) => {
            /** Define API Url Path */
            const url = `/users/login`;

            const data = {
                'username': username, 
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
                    'x-checksum': "MTIzNDU2fGphY2sub29pfGphY2tvb2lAMTIzLmNvbXwyMDIwLTA4LTI0fDEyOjUzOjAwfGphY2sub29pMnxqYWNrLm9vaTM=",
                    'x-signature': "164651c1d03a2d3a9ee3fdc70471c99fd639b9eb16a8e87188a5643965812a9e",
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
