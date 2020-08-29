import React, { useState } from 'react'
import Authentication from "../../../apis/authentication"

const LoginContainer = ({ onClickRegister }) => {

    const [state, setState] = useState({
        email: "",
        password: ""
    })

    const postLogin = () => {
        Authentication.postLogin(state.email, state.password)
            .then(response => {
                const { code: responseCode } = response;

                // if success, return success type
                if (responseCode === 200) {
                    const { data } = response;
                    console.log(data);
                }
                
                // if fail, return fail type
                if (responseCode !== 200) {
                    const { errors } = response;
                    console.log(`PostLogin: ${responseCode} - ${errors}`)
                }
            })
            .catch(error => {
                console.log(`PostLogin: ${error}`)
            })
    }

    const handleChange = event => {
        setState({ ...state, [event.target.name]: event.target.value });
    }

    const handleSignIn = () => {
        postLogin();
    }

    const handleRegister = () => {
        
    }

    return (
        <div id="login_container" className="px-4 pt-5">
            <h1 className="text-header">
                LOGIN / REGISTRATION
            </h1>

            <div id="login_form_container" className="bg-white px-4 py-4">
                <div className="d-flex flex-column justify-content-between h-100">
                    <form id="login_form">
                        <div className="mb-3">
                            <input 
                                type="text"
                                name="email"
                                placeholder="Email Address"
                                className="form-control bg-light"
                                value={state.email}
                                onChange={handleChange}
                                style={{ border: 'none' }}
                            />
                        </div>

                        <div className="mb-2">
                            <input 
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="form-control bg-light"
                                value={state.password}
                                onChange={handleChange}
                                style={{ border: 'none' }}
                            />
                        </div>

                        <div className="d-flex justify-content-end align-items-center">
                            <a href="" style={{ color: "#4B6A7A" }}>Forgot Password</a>
                        </div>
                    </form>

                    <div>
                        <button type="button" onClick={handleSignIn}
                            className="btn btn-primary mb-3 w-100"
                            style={{ backgroundColor: "#0071BC" }}>
                            Sign In
                        </button>
                        <button type="button" onClick={onClickRegister}
                            className="btn btn-primary w-100"
                            style={{ backgroundColor: "#004070" }}>
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default (LoginContainer);
