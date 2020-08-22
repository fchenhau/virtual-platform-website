import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { authenticationTypes, authenticationActions } from "../../../states/authentication"

const ParentInputContainer = ({ children }) => {

    const [parentInput, setParentInput] = useState({
        spouseName: "",
        spouseAge: 12,
        spouseUsername: "",
        spousePassword: "",
        spouseConfirmPassword: "",
        spouseEmail: "",
        children: []
    })

    const handleChange = event => {
        setParentInput({ ...parentInput, [event.target.name]: event.target.value });
    }

    return (
        <div id="parent_input_container" className="border rounded m-5 p-3">

            <form id="parent_input_form" className="mb-5 pb-5">
                <div className="mb-3">
                    <input 
                        type="text"
                        name="spouseName"
                        placeholder="Spouse Name"
                        className="form-control"
                        value={parentInput.spouseName}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3 d-flex align-items-center">
                    <span>Age</span>
                    <input 
                        type="number"
                        name="spouseAge"
                        placeholder="Age"
                        className="form-control"
                        value={parentInput.spouseAge}
                        onChange={handleChange}
                        className="mx-2"
                    />
                    <span>years</span>
                </div>

                <div className="mb-3">
                    <input 
                        type="text"
                        name="spouseUsername"
                        placeholder="Username"
                        className="form-control"
                        value={parentInput.spouseUsername}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <input 
                        type="password"
                        name="spousePassword"
                        placeholder="Password"
                        className="form-control"
                        value={parentInput.spousePassword}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <input 
                        type="password"
                        name="spouseConfirmPassword"
                        placeholder="Confirm Password"
                        className="form-control"
                        value={parentInput.spouseConfirmPassword}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <input 
                        type="email"
                        name="spouseEmail"
                        placeholder="Email Address"
                        className="form-control"
                        value={parentInput.spouseEmail}
                        onChange={handleChange}
                    />
                </div>

                { children }

            </form>
            
        </div>
    )
};

export default (ParentInputContainer);