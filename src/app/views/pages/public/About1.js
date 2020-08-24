import React, { useState, useEffect, useRef } from 'react'
import RaisingDigitalHeroesImage from "../../../assets/images/about_1.png"
import "../../../styles/about1.css"

const About1 = () => {

    return (
        <div className="about-page-1">
            <div className="d-flex align-items-center h-100">
                <img src={RaisingDigitalHeroesImage} alt="Raising Digital Heroes" 
                    className="img img-fluid" width="100%"/>
            </div>
        </div>
    )
};

export default (About1);