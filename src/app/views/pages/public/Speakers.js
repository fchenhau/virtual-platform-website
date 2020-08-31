import React, { useState, useEffect } from 'react'
import SpeakersTitleImg from "../../../assets/images/Speakers/MDM2020_07_04_SPEAKERS_19.png"
import "../../../styles/speakers.scss"
import SpeakerItem from "../../components/speakers/SpeakerItem"
import Events from "../../../apis/events"

const Speakers = () => {
    
    const [speakerListing, setSpeakerListing] = useState([]);

    const getSpeakerListing = () => {
        Events.getSpeakerListing()
            .then(response => {
                const { code: responseCode } = response;

                // if success, return success type
                if (responseCode === 200) {
                    const { data: { speakers } } = response;

                    setSpeakerListing(speakers)
                }
                
                // if fail, return fail type
                if (responseCode !== 200) {
                    const { errors } = response;
                    console.log(`GetSpeakerListing: ${responseCode} - ${errors}`)
                }
            })
            .catch(error => {
                console.log(`GetSpeakerListing: ${error}`)
            })
    }

    useEffect(() => {
        getSpeakerListing();
    }, []);

    return (
        <div id="speakers">

            <div className="speakers-content mx-auto pt-5">
                <div className="d-flex justify-content-center align-items-center flex-wrap">
                    {
                        speakerListing.map((item, index) => (
                            <SpeakerItem 
                                key={index}
                                thumbnail={item.thumbnail_url}
                                name={item.name}
                                title={item.title}
                                description={item.description}
                            />
                        ))
                    }
                </div>
            </div>
            
            <div className="speakers-title">
                <img src={SpeakersTitleImg} alt="Speakers" 
                    className="img img-fluid" />
            </div>
        </div>
    )
};

export default (Speakers);