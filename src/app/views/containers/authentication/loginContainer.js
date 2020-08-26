import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { authenticationTypes, authenticationActions } from "../../../states/authentication"

const LoginContainer = () => {

    const dispatch = useDispatch();
    const postLogin = () => dispatch(authenticationActions.postLogin());
    const resetPostLogin = () => dispatch(authenticationActions.resetPostLogin());

    const postLoginResponse = useSelector(({ auth }) => auth.postLoginResponse);

    useEffect(() => {
        const { type, message } = postLoginResponse;
        
        if (type === authenticationTypes.POST_LOGIN_SUCCESS) {
            resetPostLogin();
            console.log(message);
        }

        if (type === authenticationTypes.POST_LOGIN_FAIL) {
            resetPostLogin();
            console.log(message);
        }

    }, [postLoginResponse]);

    const [state, setState] = useState({
        username: "",
        password: ""
    })

    const handleChange = event => {
        setState({ ...state, [event.target.name]: event.target.value });
    }

    const handleSignIn = () => {
        postLogin();
    }

    const handleRegister = () => {
        
    }

    return (
        <div id="login_container" className="border rounded m-5 p-3">
            <h3 className="mb-4">
                Sign In #mydigitalmaker
            </h3>

            <form id="login_form" className="mb-5 pb-5">
                <div className="mb-3">
                    <input 
                        type="text"
                        name="username"
                        placeholder="Username"
                        className="form-control"
                        value={state.username}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <input 
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="form-control"
                        value={state.password}
                        onChange={handleChange}
                    />
                </div>

                <div className="d-flex justify-content-end align-items-center">
                    <a href="">Forgot Password</a>
                </div>
            </form>

            <button type="button" onClick={handleSignIn}
                className="btn btn-primary mb-3 w-100">
                Sign In
            </button>
            <button type="button" onClick={handleRegister}
                className="btn btn-primary mb-3 w-100">
                Register
            </button>
        </div>
    )
};

export default (LoginContainer);