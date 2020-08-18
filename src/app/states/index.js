import { combineReducers } from "redux";
import commonReducer from "./example";

export default combineReducers({
    example: commonReducer,
})
