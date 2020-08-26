import apiAction from "../lib/apiAction"

const Authentication = {

    postLogin: (params = null) => {
        return new Promise((resolve, reject) => {
            /** Define API Url Path */
            const url = 'api_url';

            /** Example API Call */
            // apiAction.get(url, params)
            //     .then(response => resolve(response.data.data))
            //     .catch(err => reject(err.response))

            // Just for example purpose
            return 'success';
        })
    },

    postRegister: (params = null) => {
        return new Promise((resolve, reject) => {
            /** Define API Url Path */
            const url = 'api_url';

            /** Example API Call */
            // apiAction.post(url, params)
            //     .then(response => resolve(response.data.data))
            //     .catch(err => reject(err.response))

            // Just for example purpose
            return 'success';
        })
    },
};

export default Authentication;
