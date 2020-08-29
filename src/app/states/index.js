import { combineReducers } from "redux"
import ExampleReducer from "./example"
import AuthenticationReducer from "./authentication"

export default combineReducers({
    example: ExampleReducer,
    auth: AuthenticationReducer
})
