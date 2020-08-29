import React from 'react'
import "../../../styles/login.css"
import LoginContainer from "../../containers/authentication/LoginContainer"

const Login = ({ onClickRegister }) => {

    return (
        <div id="login">
            <div className="login-wrapper d-flex flex-column justify-content-center ml-5">
                <LoginContainer 
                    onClickRegister={onClickRegister}
                />
            </div>
        </div>
    )
};

export default (Login);