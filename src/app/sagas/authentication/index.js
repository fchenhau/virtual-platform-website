import { all, takeEvery, takeLatest, put, call } from "@redux-saga/core/effects";
import { authenticationActions, authenticationTypes } from "../../states/authentication";
import Authentication from "../../apis/authentication";

export function* postLogin(action) {
    const { email, mobileNumber, password, deviceToken } = action.payload;

    try {
        const data = yield Authentication.login(email, mobileNumber, password, deviceToken);
        yield put(authenticationActions.postLoginSuccess(data));
    } catch ( err ) {
        yield put(authenticationActions.postLoginFail('Login Fail'));
    }
}

export function* postRegister(action) {
    const { name, email, mobileNumber, password, deviceToken } = action.payload;

    try {
        const data = yield Authentication.register(name, email, mobileNumber, password, deviceToken);
        yield put(authenticationActions.postRegisterSuccess(data));
    } catch ( err ) {
        yield put(authenticationActions.postRegisterFail('Register Fail'));
    }
}

export function* postSocialLogin(action) {
    const { platform, facebook_id, google_id, email, name, photo, deviceToken } = action.payload;

    try {
        const data = yield Authentication.socialLogin(platform, facebook_id, google_id, email, name, photo, deviceToken);
        yield put(authenticationActions.postSocialLoginSuccess(data));
    } catch ( err ) {
        console.log(err.data);
        yield put(authenticationActions.postSocialLoginFail('Social Media Login Fail'));
    }
}


export function* watchAuthenticationAction() {
    yield all([
        takeEvery(authenticationTypes.POST_LOGIN, postLogin),
        takeEvery(authenticationTypes.POST_REGISTER, postRegister),
        takeEvery(authenticationTypes.POST_SOCIAL_LOGIN, postSocialLogin),
    ])
}
