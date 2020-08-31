import React from 'react'
import MainLogo from "../../../assets/images/main_logo.png"
import "../../../styles/main.scss"

const Main = () => {

    return (
        <div className="main-page">

            <div className="logo">
                <img src={MainLogo} alt="MDM 2020 Virtual Logo" 
                    className="img img-fluid" />
            </div>
            
            <div className="logo-text w-100">
                <div className="title text-white px-lg-4">
                    <div className="mb-0 text-header">DIGITAL SKILLS TODAY,</div>
                    <div className="mb-0 text-header">WORKPLACE OF TOMORROW</div>
                </div>

                <div className="borderline">
                </div>

                <span className="subtitle text-white text-default px-lg-4">
                    RAISING DIGITAL HEROES
                </span>
            </div>

            <div className="stats px-md-0 px-3">
                <div className="d-flex justify-content-around align-items-md-center text-white text-default">
                    <div className="d-flex flex-column justify-content-md-center align-items-md-center px-2 mb-2">
                        <strong>40+</strong>
                        <span>VIRTUAL EXHIBITORS</span>
                    </div>
                    <div className="d-flex flex-column justify-content-md-center align-items-md-center px-2 mb-2">
                        <strong>30+</strong>
                        <span>SPEAKERs</span>
                    </div>
                    <div className="d-flex flex-column justify-content-md-center align-items-md-center px-2 mb-2">
                        <strong>30+</strong>
                        <span>WORKSHOPS & TUTORIALS</span>
                    </div>
                    <div className="d-flex flex-column justify-content-md-center align-items-md-center px-2 mb-2">
                        <strong>10</strong>
                        <span>COMPETITIONS</span>
                    </div>
                    <div className="d-flex flex-column justify-content-md-center align-items-md-center px-2 mb-2">
                        <strong>3,000+</strong>
                        <span>DIGITAL TECH JOBS</span>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default (Main);