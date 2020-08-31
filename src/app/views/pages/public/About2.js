import React from 'react'
import WhoIsThisForImg from "../../../assets/images/About/about_2.png"
import WhoIsThisForMobileImg from "../../../assets/images/About/about_2_mobile.png"
import "../../../styles/about2.scss"

const About2 = () => {

    return (
        <div id="about_page_2">
            {/* Desktop View */}
            <div className="d-md-block d-none">
                <div className="d-flex align-items-center h-100">
                    <img src={WhoIsThisForImg} alt="Who Is This For" 
                        className="img img-fluid" />
                </div>
            </div>
            
            {/* Mobile View */}
            <div className="d-block d-md-none h-100">
                <div className="d-flex flex-column pt-5">
                    <img src={WhoIsThisForMobileImg} alt="Who Is This For" 
                        className="img img-fluid" />

                    <p className="text-default text-white text-justify mx-auto px-4">
                        The virtual fair aims to spark a child's interest in STEM-based learning, ensuring
                        they are future-proof as we funnel talents towards workforce and ensure educators are
                        ready to embrace the digital future.
                    </p>
                </div>
            </div>
        </div>
    )
};

export default (About2);