import React from 'react'
import "../../../styles/register.scss"
import RegisterContainer from "../../containers/authentication/RegisterContainer"

const Register = () => {

    return (
        <div id="register">
            <div className="register-wrapper pt-4">
                <RegisterContainer />
            </div>
        </div>
    )
};

export default (Register);