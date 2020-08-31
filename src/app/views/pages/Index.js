import React, { useState, useEffect, useRef } from 'react';
import { withRouter } from 'react-router-dom'
import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'
import "../../styles/index.scss"

import Main from "./public/Main"
import About1 from "./public/About1"
import About2 from "./public/About2"
import Highlights from "./public/Highlights"
import Speakers from "./public/Speakers"
import Login from "./public/Login"
import Register from "./public/Register"

import BurgerMenuImg from "../../assets/images/burger_menu.png"
import AboutFairMenuImg from "../../assets/images/menu_about_fair.png"
import HighlightMenuImg from "../../assets/images/menu_highlight.png"
import SpeakersMenuImg from "../../assets/images/menu_speakers.png"
import RegistrationMenuImg from "../../assets/images/menu_registration.png"

const pagesOffset = {
    'main': 0,
    'about1': 0.5,
    'about2': 1,
    'highlights': 1.5,
    'speakers': 2,
    'login': 3,
    'register': 4
}

const Index = ({ history }) => {

    const refParallax = useRef(null);

    const handleOnClickRegister = () => {
        refParallax.current.scrollTo(4);
    }

    const [isMenuToggle, setIsMenuToggle] = useState(false);

    const toggleMenu = () => {
        setIsMenuToggle(!isMenuToggle);
    }

    const scrollTo = (page) => {
        refParallax.current.scrollTo(pagesOffset[page]);
    }

    return (
        <>

            <div id="burger_menu" className="">
                <span onClick={toggleMenu}>
                    <img src={BurgerMenuImg} alt="burger menu" className="menu mb-3" />
                </span>

                {
                    isMenuToggle
                    &&
                    <ul id="nav_menu" className="d-flex flex-column">
                        <li className="mb-2" onClick={() => scrollTo('about1')}>
                            <img src={AboutFairMenuImg} alt="About Fair" className="nav_menu_item" />
                        </li>
                        <li className="mb-2" onClick={() => scrollTo('highlights')}>
                            <img src={HighlightMenuImg} alt="Highlights" className="nav_menu_item" />
                        </li>
                        <li className="mb-2" onClick={() => scrollTo('speakers')}>
                            <img src={SpeakersMenuImg} alt="Speakers" className="nav_menu_item" />
                        </li>
                        <li className="mb-2" onClick={() => scrollTo('login')}>
                            <img src={RegistrationMenuImg} alt="Registration" className="nav_menu_item" />
                        </li>
                    </ul>
                }
                
            </div>

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
                    <Login 
                        onClickRegister={handleOnClickRegister} 
                    />
                </ParallaxLayer>

                <ParallaxLayer offset={4} speed={0}>
                    <Register />
                </ParallaxLayer>

                {/* Moving Layers */}
                <ParallaxLayer offset={0.99} speed={1}>
                    <About1 />
                </ParallaxLayer>

                <ParallaxLayer offset={1.99} speed={1}>
                    <Highlights />
                </ParallaxLayer>
            </Parallax>
        </>
    )
};

export default withRouter(Index);