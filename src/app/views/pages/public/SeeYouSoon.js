import React from 'react'
import "../../../styles/seeYouSoon.css"
import BtnConfirm from "../../../assets/images/Register/btn_confirm.png"
import { withRouter } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";

const SeeYouSoon = ({ history }) => {

    const email = useSelector(({auth}) => auth.email)
    const password = useSelector(({auth}) => auth.password)

    return (
        <div id="see_you_soon">
            <div className="see-you-soon-wrapper d-flex flex-column justify-content-center ml-5">
                <h1 className="text-header">SEE YOU SOON</h1>

                <div className="see-you-soon-container px-4 pt-5 bg-light">
                    <div className="mb-3">
                        <strong className="text-1">Your registration has been set up successfully</strong>
                    </div>
                    <div className="mb-3 pl-5">
                        <table style={{ borderSpacing: "5px", borderCollapse: "separate" }}>
                            <tbody>
                                <tr>
                                    <th>Email Address</th>
                                    <td className="px-2">:</td>
                                    <td className="w-75 bg-white">{email || '-'}</td>
                                </tr>
                                <tr>
                                    <th>Password</th>
                                    <td className="px-2">:</td>
                                    <td className="w-75 bg-white">{password || '-'}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        Please note that you will be required to use this login to enter the #mydigitalmaker Virtual Fair from 5th to 11th October 2020.
                    </div>

                    
                    <div className="btn-confirm-wrapper"
                        onClick={() => history.push('/')}>
                            <img src={BtnConfirm} alt="Confirm"
                                className="img img-fluid" />
                    </div>
                </div>

            </div>
        </div>
    )
};

export default withRouter(SeeYouSoon);