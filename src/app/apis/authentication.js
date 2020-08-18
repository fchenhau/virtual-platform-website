import apiAction from "../lib/apiAction";

const Authentication = {

    login: (email, mobileNumber, password, deviceToken) => {
        let bodyData = {};

        if (email) {
            bodyData = {
                'email': email,
                'password': password,
                'device_token': deviceToken
            }
        }
        else {
            bodyData = {
                'mobile_number': mobileNumber,
                'password': password,
                'device_token': deviceToken
            }
        }
        
        return new Promise((resolve, reject) => {
            apiAction.post('/user/login', bodyData)
                .then(response => resolve(response.data.data))
                .catch(err => reject(err.response))
        })
    },

    register: (name, email, mobileNumber, password, deviceToken) => {
        let bodyData = {
            'name': name,
            'password': password,
            'device_token': deviceToken
        };

        if (email) {
            bodyData = { ...bodyData, 'email': email }
        }
        else {
            bodyData = { ...bodyData, 'mobile_number': mobileNumber }
        }

        return new Promise((resolve, reject) => {
            apiAction.post('/user/register', bodyData)
                .then(response => resolve(response.data.data))
                .catch(err => reject(err.response))
        })
    },

    socialLogin: (platform, facebook_id, google_id, email, name, photo, deviceToken) => {
        let bodyData = {
            platform, email, name, photo, 
            'device_token': deviceToken
        };

        if (platform === 'facebook') {
            bodyData = { ...bodyData, facebook_id };
        }
        else if (platform === 'google') {
            bodyData = { ...bodyData, google_id };
        }
        
        return new Promise((resolve, reject) => {
            apiAction.post('/user/login/social', bodyData)
                .then(response => resolve(response.data.data))
                .catch(err => reject(err.response))
        })
    },
};

export default Authentication;
