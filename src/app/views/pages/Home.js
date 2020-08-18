import React, { useState, useEffect } from 'react';
import * as styles from '../../lib/styles';

import { withTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { authenticationActions, authenticationTypes } from "../../states/authentication";

const Home = () => {

    return (
        <div>
            <h1>Home Page</h1>
        </div>
    )
};

export default (Home);