import React from 'react'
import HighlightImg1 from "../../../assets/images/Highlights/MDM2020_07_03_HIGHLIGHT_14.png"
import HighlightImg2 from "../../../assets/images/Highlights/MDM2020_07_03_HIGHLIGHT_15.png"
import HighlightImg3 from "../../../assets/images/Highlights/MDM2020_07_03_HIGHLIGHT_16.png"
import HighlightImg4 from "../../../assets/images/Highlights/MDM2020_07_03_HIGHLIGHT_17.png"
import HighlightImg5 from "../../../assets/images/Highlights/MDM2020_07_03_HIGHLIGHT_18.png"
import HighlightBtmBar from "../../../assets/images/Highlights/MDM2020_07_03_HIGHLIGHT_12.png"
import HighlightBtmBarMobile from "../../../assets/images/Highlights/highlight_bottom_mobile.png"

import "../../../styles/highlights.scss"

const Highlights = () => {

    return (
        <div id="highlights">

            <div className="d-flex flex-column justify-content-md-center justify-content-start h-100 px-4 pt-md-0 pt-5">
                <h1 className="text-header text-md-left text-center px-3">FOCUS PILLAR</h1>

                <div id="highlights_content" className="d-flex flex-md-row flex-column justify-content-between align-items-center">
                    <div className="d-flex flex-column align-items-center h-100 mb-3">
                        <img src={HighlightImg1} alt="EXTENDED REALITY" 
                            className="img img-fluid p-3" />
                        <h6 className="text-header text-center">EXTENDED REALITY</h6>
                        <div className="text-center">
                            <div className="text-muted text-default">Virtual Reality</div>
                            <div className="text-muted text-default">Augmented Reality</div>
                            <div className="text-muted text-default">Mixed Reality</div>
                        </div>
                    </div>

                    <div className="d-flex flex-column align-items-center h-100 mb-3">
                        <img src={HighlightImg2} alt="ARTIFICIAL INTELLIGENCE" 
                            className="img img-fluid p-3" />
                        <h6 className="text-header text-center">ARTIFICIAL INTELLIGENCE</h6>
                        <div className="text-center">
                            <div className="text-muted text-default">Machine Learning</div>
                            <div className="text-muted text-default">Deep Learning</div>
                            <div className="text-muted text-default">Big Data</div>
                        </div>
                    </div>

                    <div className="d-flex flex-column align-items-center h-100 mb-3">
                        <img src={HighlightImg3} alt="ROBOTICS" 
                            className="img img-fluid p-3" />
                        <h6 className="text-header text-center">ROBOTICS</h6>
                        <div className="text-center">
                            <div className="text-muted text-default">Automations</div>
                            <div className="text-muted text-default">Drones</div>
                            <div className="text-muted text-default">Rapid Prototyping</div>
                            <div className="text-muted text-default">Cloud/IOT</div>
                        </div>
                    </div>

                    <div className="d-flex flex-column align-items-center h-100">
                        <img src={HighlightImg4} alt="DIGITAL ARTS" 
                            className="img img-fluid p-3" />
                        <h6 className="text-header text-center">DIGITAL ARTS</h6>
                        <div className="text-center">
                            <div className="text-muted text-default">3D Modeling</div>
                            <div className="text-muted text-default">Graphic Design</div>
                            <div className="text-muted text-default">Animation</div>
                        </div>
                    </div>

                    <div className="d-flex flex-column align-items-center h-100">
                        <img src={HighlightImg5} alt="DIGITAL COMMUNITY" 
                            className="img img-fluid p-3" />
                        <h6 className="text-header text-center">DIGITAL COMMUNITY</h6>
                        <div className="text-center">
                            <div className="text-muted text-default">Celebratin the efforts by the digital maker communities during COVID-19</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="highlight-btm-bar w-100">
                {/* Desktop View */}
                <div className="d-md-block d-none">
                    <img src={HighlightBtmBar} alt="DIGITAL ARTS" className="img img-fluid" />
                </div>

                {/* Mobile View */}
                <div id="highlight-btm-bar-mobile" className="d-block d-md-none py-4">
                    <div className="text-center text-default text-white mb-2">
                        RAISING DIGITAL HEROES
                    </div>

                    <div className="d-flex justify-content-center align-items-center bg-dark py-3">
                        <img src={HighlightBtmBarMobile} alt="DIGITAL ARTS" 
                            className="img img-fluid w-50" />
                    </div>
                </div>
                
            </div>
        </div>
    )
};

export default (Highlights);