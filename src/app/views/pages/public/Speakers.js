import React, { useState, useEffect, useRef } from 'react'
import SpeakersTitleImg from "../../../assets/images/Speakers/MDM2020_07_04_SPEAKERS_19.png"
import "../../../styles/speakers.css"
import SpeakerItem from "../../components/speakers/SpeakerItem"

const Speakers = () => {

    return (
        <div id="speakers">

            <div className="speakers-content mx-auto pt-5">
                <div className="d-flex justify-content-center align-items-center flex-wrap">
                    {
                        [...new Array(7)].map((item, index) => (
                            <SpeakerItem 
                                key={index}
                                thumbnail={"https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Emblem-extra-cool.svg/1200px-Emblem-extra-cool.svg.png"}
                                name={"John Doe"}
                                title={"Personal Mentor"}
                                description={"100 ways to ace your interview"}
                            />
                        ))
                    }
                </div>
            </div>
            
            <div className="speakers-btm-title">
                <img src={SpeakersTitleImg} alt="Speakers" 
                    className="img img-fluid" />
            </div>
        </div>
    )
};

export default (Speakers);