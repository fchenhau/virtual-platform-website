import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { authenticationTypes, authenticationActions } from "../../../states/authentication";

const RegisterContainer = () => {

    const dispatch = useDispatch();
    const postRegister = () => dispatch(authenticationActions.postRegister());
    const resetPostRegister = () => dispatch(authenticationActions.resetPostRegister());

    const postRegisterResponse = useSelector(({ auth }) => auth.postRegisterResponse);

    useEffect(() => {
        const { type, message } = postRegisterResponse;
        
        if (type === authenticationTypes.POST_REGISTER_SUCCESS) {
            resetPostRegister();
            console.log(message);
        }

        if (type === authenticationTypes.POST_REGISTER_FAIL) {
            resetPostRegister();
            console.log(message);
        }

    }, [postRegisterResponse]);

    const [state, setState] = useState({
        username: "",
        password: ""
    })

    const handleChange = event => {
        setState({ ...state, [event.target.name]: event.target.value });
    }

    const handleRegister = () => {
        postRegister();
    }

    return (
        <div id="register_container" className="border rounded m-5 p-3">
            <h3 className="mb-4">
                Register #mydigitalmaker
            </h3>

            <form id="register_form" className="mb-5 pb-5">
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

                <div class="d-flex justify-content-end align-items-center">
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

export default (RegisterContainer);