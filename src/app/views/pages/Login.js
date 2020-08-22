import React, { useState, useEffect, useRef } from 'react'
import LoginContainer from '../containers/authentication/LoginContainer'
import RegisterContainer from '../containers/authentication/RegisterContainer'

const Login = () => {

    return (
        <>
            <LoginContainer />
            <RegisterContainer />
        </>
    )
};

export default (Login);