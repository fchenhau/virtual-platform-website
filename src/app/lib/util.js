import AsyncStorage from '@react-native-community/async-storage';
import * as CONSTANT from './constant';

const Util = {
    saveToken: (token) => {
        return new Promise((resolve, reject) => {
            AsyncStorage.setItem(CONSTANT.ACCESS_TOKEN, token)
                .then(() => { resolve() })
                .catch((err) => { reject(err) })
        })
    },

    getToken: () => {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(CONSTANT.ACCESS_TOKEN)
                .then((token) => { resolve(token) })
                .catch((err) => { reject(err) })
        })
    },

    saveDeviceToken: (token) => {
        return new Promise((resolve, reject) => {
            AsyncStorage.setItem(CONSTANT.DEVICE_TOKEN, token)
                .then(() => { resolve() })
                .catch((err) => { reject(err) })
        })
    },

    getDeviceToken: () => {
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(CONSTANT.DEVICE_TOKEN)
                .then((token) => { resolve(token) })
                .catch((err) => { reject(err) })
        })
    },

    clearAll: async () => {
        try {
            await AsyncStorage.removeItem(CONSTANT.ACCESS_TOKEN);
        } catch(e) {
            console.log('Clear Storage Error', e)
        }
      
        console.log('Storage Cleared.')
    },
};

export default Util;
