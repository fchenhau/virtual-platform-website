import React from 'react'
import "../../../styles/login.css"
import LoginContainer from "../../containers/authentication/LoginContainer"

const Login = ({ onClickRegister }) => {

    return (
        <div id="login">
            <div className="login-wrapper">
                <LoginContainer 
                    onClickRegister={onClickRegister}
                />
            </div>
        </div>
    )
};

export default (Login);