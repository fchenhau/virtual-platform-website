import React from 'react'
import WhoIsThisForImg from "../../../assets/images/About/about_2.png"
import "../../../styles/about2.css"

const About2 = () => {

    return (
        <div id="about_page_2">

            <div className="d-flex align-items-center h-100">
                <img src={WhoIsThisForImg} alt="Raising Digital Heroes" 
                    className="img img-fluid" />
            </div>
            
        </div>
    )
};

export default (About2);