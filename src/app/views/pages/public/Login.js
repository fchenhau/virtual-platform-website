import React, { useState, useEffect } from 'react'
import SpeakersTitleImg from "../../../assets/images/Speakers/MDM2020_07_04_SPEAKERS_19.png"
import "../../../styles/speakers.css"
import LoginContainer from "../../containers/authentication/LoginContainer"
import RegisterContainer from "../../containers/authentication/RegisterContainer"

const Login = () => {

    return (
        <div id="login">
            <LoginContainer />
            <RegisterContainer />
        </div>
    )
};

export default (Login);