import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { exampleTypes, exampleActions } from "../../states/example";
import { withRouter } from 'react-router-dom'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

import Main from "./public/Main"

const Index = ({ history }) => {

    const refParallax = useRef(null);

    return (
        <Parallax pages={3} scrolling={true} horizontal={false} ref={refParallax}>
            <Main />
        </Parallax>
    )
};

export default withRouter(Index);