import React from 'react'
import HighlightImg1 from "../../../assets/images/Highlights/MDM2020_07_03_HIGHLIGHT_14.png"
import HighlightImg2 from "../../../assets/images/Highlights/MDM2020_07_03_HIGHLIGHT_15.png"
import HighlightImg3 from "../../../assets/images/Highlights/MDM2020_07_03_HIGHLIGHT_16.png"
import HighlightImg4 from "../../../assets/images/Highlights/MDM2020_07_03_HIGHLIGHT_17.png"
import HighlightImg5 from "../../../assets/images/Highlights/MDM2020_07_03_HIGHLIGHT_18.png"
import HighlightBtmBar from "../../../assets/images/Highlights/MDM2020_07_03_HIGHLIGHT_12.png"

import "../../../styles/highlights.css"

const Highlights = () => {

    return (
        <div id="highlights">

            <div className="d-flex flex-column justify-content-center h-100 px-4">
                <h1 className="text-header px-3">FOCUS PILLAR</h1>

                <div className="d-flex flex-md-row justify-content-between align-items-center">
                    <div className="d-flex flex-column align-items-center h-100">
                        <img src={HighlightImg1} alt="EXTENDED REALITY" 
                            className="img img-fluid p-3" />
                        <h6 className="text-header text-center">EXTENDED REALITY</h6>
                        <div className="text-center">
                            <div className="text-muted">Virtual Reality</div>
                            <div className="text-muted">Augmented Reality</div>
                            <div className="text-muted">Mixed Reality</div>
                        </div>
                    </div>

                    <div className="d-flex flex-column align-items-center h-100">
                        <img src={HighlightImg2} alt="ARTIFICIAL INTELLIGENCE" 
                            className="img img-fluid p-3" />
                        <h6 className="text-header text-center">ARTIFICIAL INTELLIGENCE</h6>
                        <div className="text-center">
                            <div className="text-muted">Machine Learning</div>
                            <div className="text-muted">Deep Learning</div>
                            <div className="text-muted">Big Data</div>
                        </div>
                    </div>

                    <div className="d-flex flex-column align-items-center h-100">
                        <img src={HighlightImg3} alt="ROBOTICS" 
                            className="img img-fluid p-3" />
                        <h6 className="text-header text-center">ROBOTICS</h6>
                        <div className="text-center">
                            <div className="text-muted">Automations</div>
                            <div className="text-muted">Drones</div>
                            <div className="text-muted">Rapid Prototyping</div>
                            <div className="text-muted">Cloud/IOT</div>
                        </div>
                    </div>

                    <div className="d-flex flex-column align-items-center h-100">
                        <img src={HighlightImg4} alt="DIGITAL ARTS" 
                            className="img img-fluid p-3" />
                        <h6 className="text-header text-center">DIGITAL ARTS</h6>
                        <div className="text-center">
                            <div className="text-muted">3D Modeling</div>
                            <div className="text-muted">Graphic Design</div>
                            <div className="text-muted">Animation</div>
                        </div>
                    </div>

                    <div className="d-flex flex-column align-items-center h-100">
                        <img src={HighlightImg5} alt="DIGITAL COMMUNITY" 
                            className="img img-fluid p-3" />
                        <h6 className="text-header text-center">DIGITAL COMMUNITY</h6>
                        <div className="text-center">
                            <div className="text-muted">Celebratin the efforts by the digital maker communities during COVID-19</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="highlight-btm-bar w-100">
                <img src={HighlightBtmBar} alt="DIGITAL ARTS" 
                    className="img img-fluid" />
            </div>
        </div>
    )
};

export default (Highlights);