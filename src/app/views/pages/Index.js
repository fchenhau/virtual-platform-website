import React, { useState, useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'

import Main from "./public/Main"
import About1 from "./public/About1"
import About2 from "./public/About2"
import Highlights from "./public/Highlights"
import Speakers from "./public/Speakers"
import Login from "./public/Login"
import Register from "./public/Register"

const Index = ({ history }) => {

    const refParallax = useRef(null);

    const handleOnClickRegister = () => {
        refParallax.current.scrollTo(4);
    }

    return (
        <Parallax pages={8} scrolling={true} horizontal={false} ref={refParallax}>

            {/* Static Layers */}
            <ParallaxLayer offset={0} speed={0}>
                <Main />
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={0}>
                <About2 />
            </ParallaxLayer>

            <ParallaxLayer offset={4} speed={0}>
                <Register />
            </ParallaxLayer>
            
            <ParallaxLayer offset={3} speed={0}>
                <Login 
                    onClickRegister={handleOnClickRegister} 
                />
            </ParallaxLayer>

            <ParallaxLayer offset={2} speed={0}>
                <Speakers />
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