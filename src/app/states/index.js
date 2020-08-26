import { combineReducers } from "redux"
import ExampleReducer from "./example"
import AuthenticationReducer from "./authentication"
import EventReducer from "./events"

export default combineReducers({
    example: ExampleReducer,
    auth: AuthenticationReducer,
    event: EventReducer,
})
