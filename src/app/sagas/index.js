import { all } from "redux-saga/effects";
import { watchAuthenticationAction } from "./authentication";

export default function* rootSaga() {
    yield all([
        watchAuthenticationAction(),
    ]);
}
