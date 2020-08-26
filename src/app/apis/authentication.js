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
                .then(response => resolve(response.data.data))
                .catch(err => reject(err.response))
        })
    },

    postRegister: (users = {}, eventId = 1) => {
        return new Promise((resolve, reject) => {
            /** Define API Url Path */
            const url = '/users';

            const data = {
                'users': users,
                'event_id': eventId
            }

            apiAction.post(url, data)
                .then(response => resolve(response.data.data))
                .catch(err => reject(err.response))
        })
    },
};

export default Authentication;
