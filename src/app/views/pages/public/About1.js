import React, { useState, useEffect, useRef } from 'react'
import RaisingDigitalHeroesImage from "../../../assets/images/about_1.png"
import "../../../styles/about1.css"

const About1 = () => {

    return (
        <div id="about_page_1">
            <div className="about-page-1-text">
                <h3>RAISING DIGITAL HEROES</h3>
                <p>
                    The #mydigitalmaker Virtual Fair 2020 is the flagship event of the #mydigitalmaker Movement since 2017. 
                    The Fair celebrates what the movement has accomplished throughout the year. 
                    It is also to encourage Malaysian youths to grow from digital users to digital innovators.
                </p>
                <p>
                    The #mydigitalmaker Virtual Fair 2020 is the premier digital tech education exhibition in the region!
                </p>
            </div>

            <div className="d-flex align-items-center h-100">
                <img src={RaisingDigitalHeroesImage} alt="Raising Digital Heroes" 
                    className="img img-fluid" />
            </div>
            
        </div>
    )
};

export default (About1);