import { combineReducers } from "redux"
import ExampleReducer from "./example"

export default combineReducers({
    example: ExampleReducer,
})
