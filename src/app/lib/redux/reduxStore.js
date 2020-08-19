import { createStore, } from 'redux';

import rootReducer from '../../states';

const store = createStore(
    rootReducer,
);

export default store;
