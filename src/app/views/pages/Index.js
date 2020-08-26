import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { exampleTypes, exampleActions } from "../../states/example";
import { withRouter } from 'react-router-dom'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

import Main from "./public/Main"
import About1 from "./public/About1"
import About2 from "./public/About2"
import Highlights from "./public/Highlights"
import Speakers from "./public/Speakers"
import Login from "./public/Login"

const Index = ({ history }) => {

    const refParallax = useRef(null);

    return (
        <Parallax pages={5} scrolling={true} horizontal={false} ref={refParallax}>

            {/* Static Layers */}
            <ParallaxLayer offset={0} speed={0}>
                <Main />
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={0}>
                <About2 />
            </ParallaxLayer>

            <ParallaxLayer offset={2} speed={0}>
                <Speakers />
            </ParallaxLayer>

            <ParallaxLayer offset={3} speed={0}>
                <Login />
            </ParallaxLayer>
            
            {/* Moving Layers */}
            <ParallaxLayer offset={0.99} speed={1}>
                <About1 />
            </ParallaxLayer>

            <ParallaxLayer offset={1.99} speed={1}>
                <Highlights />
            </ParallaxLayer>
        </Parallax>
    )
};

export default withRouter(Index);