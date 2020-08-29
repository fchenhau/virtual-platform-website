import React from 'react'
import "../../../styles/seeYouSoon.css"
import BtnConfirm from "../../../assets/images/Register/btn_confirm.png"

const SeeYouSoon = () => {

    return (
        <div id="see_you_soon">
            <div className="see-you-soon-wrapper d-flex flex-column justify-content-center ml-5">
                <h2>SEE YOU SOON</h2>

                <div className="see-you-soon-container px-3 pt-5 bg-light">
                    <div className="mb-3">
                        Your registration has been set up successfully
                    </div>
                    <div className="mb-3 pl-5">
                        <div>Email Address: {"-"}</div>
                        <div>Password: {"-"}</div>
                    </div>
                    <div>
                        Please note that you will be required to use this login to enter the #mydigitalmaker Virtual Fair from 5th to 11th October 2020.
                    </div>

                    
                    <div className="btn-confirm-wrapper">
                        <a href="">
                            <img src={BtnConfirm} alt="Confirm"
                                className="img img-fluid" />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default (SeeYouSoon);