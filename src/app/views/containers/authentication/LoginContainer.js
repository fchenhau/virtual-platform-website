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
        <div id="login_container" className="m-5 p-4 pt-5">
            <h3 className="mb-3 text-center">
                LOGIN / REGISTRATION
            </h3>

            <div className="bg-white px-4 py-4">
                <div className="d-flex flex-column justify-content-between">
                    <form id="login_form" style={{ marginBottom: "30vh"}}>
                        <div className="mb-3">
                            <input 
                                type="text"
                                name="email"
                                placeholder="Email Address"
                                className="form-control"
                                value={state.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="mb-2">
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

                    <div>
                        <button type="button" onClick={handleSignIn}
                            className="btn btn-primary mb-3 w-100">
                            Sign In
                        </button>
                        <button type="button" onClick={onClickRegister}
                            className="btn btn-primary w-100">
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default (LoginContainer);
