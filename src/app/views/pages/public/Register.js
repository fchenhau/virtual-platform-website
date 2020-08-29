import React from 'react'
import "../../../styles/register.css"
import RegisterContainer from "../../containers/authentication/RegisterContainer"

const Register = () => {

    return (
        <div id="register">
            <div className="register-wrapper">
                <RegisterContainer />
            </div>
        </div>
    )
};

export default (Register);