import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { exampleTypes, exampleActions } from "../../states/example";
import { withRouter } from 'react-router-dom'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

import Main from "./public/Main"
import About1 from "./public/About1"

const Index = ({ history }) => {

    const refParallax = useRef(null);

    return (
        <Parallax pages={3} scrolling={true} horizontal={false} ref={refParallax}>

            <ParallaxLayer offset={0} speed={0}>
                <Main />
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={0}>
                <Main />
            </ParallaxLayer>
            
            <ParallaxLayer offset={0.99} speed={1}>
                <About1 />
            </ParallaxLayer>

            
        </Parallax>
    )
};

export default withRouter(Index);