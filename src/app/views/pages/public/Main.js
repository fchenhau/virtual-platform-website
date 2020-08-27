import React from 'react'
import MainLogo from "../../../assets/images/main_logo.png"
import "../../../styles/main.css"

const Main = () => {

    return (
        <div className="main-page">

            <div className="logo">
                <img src={MainLogo} alt="MDM 2020 Virtual Logo" 
                    className="img img-fluid" width="25%" />
            </div>
            
            <div className="logo-text w-100">
                <div className="title text-white px-lg-4">
                    <h5 className="mb-0">DIGITAL SKILLS TODAY,</h5>
                    <h5 className="mb-0">WORKPLACE OF TOMORROW</h5>
                </div>

                <div className="borderline">
                </div>

                <span className="subtitle text-white px-lg-4">
                    RAISING DIGITAL HEROES
                </span>
            </div>

            <div className="stats w-100">
                <div className="d-flex justify-content-around align-items-center flex-wrap text-white">
                    <div className="d-flex flex-column justify-content-center align-items-center px-2 mb-2">
                        <span>{">40"}</span>
                        <span>VIRTUAL EXHIBITORS</span>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center px-2 mb-2">
                        <span>{">30"}</span>
                        <span>SPEAKERs</span>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center px-2 mb-2">
                        <span>{">30"}</span>
                        <span>WORKSHOPS & TUTORIALS</span>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center px-2 mb-2">
                        <span>{"10"}</span>
                        <span>COMPETITIONS</span>
                    </div>
                    <div className="d-flex flex-column justify-content-center align-items-center px-2 mb-2">
                        <span>{">3,000"}</span>
                        <span>DIGITAL TECH JOBS</span>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default (Main);