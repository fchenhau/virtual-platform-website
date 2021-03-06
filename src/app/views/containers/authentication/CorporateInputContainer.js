import React, { useState } from 'react'

const CorporateInputContainer = ({ children }) => {

    const [corporateInput, setCorporateInput] = useState({
        invitationPasscode: "",
        areaOfParticipation: "",
        addressLine1: "",
        addressLine2: "",
    })

    const handleChange = event => {
        setCorporateInput({ ...corporateInput, [event.target.name]: event.target.value });
    }

    return (
        <div id="corporate_input_container" className="border rounded m-5 p-3">

            <div className="mb-3">
                <input 
                    type="text"
                    name="invitationPasscode"
                    placeholder="Invitation Passcode"
                    className="form-control"
                    value={corporateInput.invitationPasscode}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <input 
                    type="text"
                    name="areaOfParticipation"
                    placeholder="Area of Participation"
                    className="form-control"
                    value={corporateInput.areaOfParticipation}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <input 
                    type="text"
                    name="addressLine1"
                    placeholder="Address"
                    className="form-control"
                    value={corporateInput.addressLine1}
                    onChange={handleChange}
                />
            </div>

            <div className="mb-3">
                <input 
                    type="text"
                    name="addressLine2"
                    placeholder=""
                    className="form-control"
                    value={corporateInput.addressLine2}
                    onChange={handleChange}
                />
            </div>

            { children }
            
        </div>
    )
};

export default (CorporateInputContainer);