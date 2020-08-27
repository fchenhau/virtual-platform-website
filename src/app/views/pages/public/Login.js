import React from 'react'
import "../../../styles/login.css"
import LoginContainer from "../../containers/authentication/LoginContainer"

const Login = () => {

    return (
        <div id="login">
            <div className="login-wrapper">
                <LoginContainer />
            </div>
        </div>
    )
};

export default (Login);