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

import BurgerMenuImg from "../../assets/images/Menu/burger_menu.png"
import AboutFairMenuImg from "../../assets/images/Menu/menu_about_fair.png"
import HighlightsMenuImg from "../../assets/images/Menu/menu_highlights.png"
import SpeakersMenuImg from "../../assets/images/Menu/menu_speakers.png"
import RegistrationMenuImg from "../../assets/images/Menu/menu_registration.png"
import AboutFairImg from "../../assets/images/Menu/about_fair.png"
import HighlightsImg from "../../assets/images/Menu/highlights.png"
import SpeakersImg from "../../assets/images/Menu/speakers.png"
import RegistrationImg from "../../assets/images/Menu/registration.png"

const pagesOffset = {
    'main': 0,
    'about1': 0.5,
    'about2': 1,
    'highlights': 1.5,
    'speakers': 2,
    'login': 3,
    'register': 4
}

const scrollOffset = {
    'about1': 313 - 30,
    'highlights': 939 - 30,
    'speakers': 1252 - 30,
    'login': 1877 - 30,
}

const Index = ({ history }) => {

    const refParallax = useRef();

    const [currOffset, setCurrOffset] = useState(0);
    const [isMenuToggle, setIsMenuToggle] = useState(false);

    const toggleMenu = () => {
        setIsMenuToggle(!isMenuToggle);
    }

    const scrollTo = (page) => {
        refParallax.current.scrollTo(pagesOffset[page]);
    }

    useEffect(() => {
        const interval = setInterval(function() { 
            setCurrOffset(refParallax.current.current);
        }, 500);
        
        return () => {
            clearInterval(interval);
        }
    }, []);

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
                        <li className="mb-3" onClick={() => scrollTo('about1')}>
                            {
                                currOffset >= scrollOffset.about1 && currOffset < scrollOffset.highlights
                                ?
                                <img src={AboutFairMenuImg} alt="About Fair" className="nav_menu_item_active" />
                                :
                                <img src={AboutFairImg} alt="About Fair" className="nav_menu_item" />
                            }
                        </li>
                        <li className="mb-3" onClick={() => scrollTo('highlights')}>
                            {
                                currOffset >= scrollOffset.highlights && currOffset < scrollOffset.speakers
                                ?
                                <img src={HighlightsMenuImg} alt="Highlights" className="nav_menu_item_active" />
                                :
                                <img src={HighlightsImg} alt="About Fair" className="nav_menu_item" />
                            }
                        </li>
                        <li className="mb-3" onClick={() => scrollTo('speakers')}>
                            {
                                currOffset >= scrollOffset.speakers && currOffset < scrollOffset.login
                                ?
                                <img src={SpeakersMenuImg} alt="Speakers" className="nav_menu_item_active" />
                                :
                                <img src={SpeakersImg} alt="Speakers" className="nav_menu_item" />
                            }
                        </li>
                        <li className="mb-3" onClick={() => scrollTo('login')}>
                            {
                                currOffset >= scrollOffset.login
                                ?
                                <img src={RegistrationMenuImg} alt="Registration" className="nav_menu_item_active" />
                                :
                                <img src={RegistrationImg} alt="Registration" className="nav_menu_item" />
                            }
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
                        onClickRegister={() => scrollTo('register')} 
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