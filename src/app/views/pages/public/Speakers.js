import React, { useState, useEffect } from 'react'
import SpeakersTitleImg from "../../../assets/images/Speakers/MDM2020_07_04_SPEAKERS_19.png"
import "../../../styles/speakers.css"
import SpeakerItem from "../../components/speakers/SpeakerItem"
import Events from "../../../apis/events"

import { useDispatch, useSelector } from "react-redux"
import { eventTypes, eventActions } from "../../../states/events"

const Speakers = () => {

    const dispatch = useDispatch();

    const getSpeakerListing = () => {
        Events.getSpeakerListing()
            .then(response => {
                const { code: responseCode } = response;

                // if success, return success type
                if (responseCode === 200) {
                    const { data } = response;
                    
                    dispatch(eventActions.getSpeakerListingSuccess(data))
                }
                
                // if fail, return fail type
                if (responseCode !== 200) {
                    const { errors } = response;
                    dispatch(eventActions.getSpeakerListingFail(errors))
                }
            });
        
    }

    const resetGetSpeakerListing = () => dispatch(eventActions.resetGetSpeakerListing());

    const getSpeakerListingResponse = useSelector(({ event }) => event.getSpeakerListingResponse);

    const [speakerListing, setSpeakerListing] = useState([]);

    useEffect(() => {
        getSpeakerListing();
    }, []);

    useEffect(() => {
        const { type, message, apiData } = getSpeakerListingResponse;
        
        if (type === eventTypes.GET_SPEAKER_LISTING_SUCCESS) {
            const { speakers } = apiData;
            
            resetGetSpeakerListing();
            setSpeakerListing(speakers);
            console.log(message);
        }

        if (type === eventTypes.GET_SPEAKER_LISTING_FAIL) {
            resetGetSpeakerListing();
            console.log(message);
        }

    }, [getSpeakerListingResponse]);

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
            
            <div className="speakers-btm-title">
                <img src={SpeakersTitleImg} alt="Speakers" 
                    className="img img-fluid" />
            </div>
        </div>
    )
};

export default (Speakers);