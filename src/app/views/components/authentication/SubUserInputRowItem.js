import React, { useState } from 'react'
import CustomInput from "./CustomInput"

const SubUserInputRowItem = ({ index, mainUserType }) => {

    const [input, setInput] = useState({
        subUserName: "",
        subUserDob: "",
        subUserSchoolName: "",
        subUserPassword: "",
        subUserConfirmPassword: "",
        subUserEmail: ""
    })

    const handleChange = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
    }

    // Set the placholder name
    let placeholderName = 'Name'; 
    if (mainUserType === 'parent') {
        placeholderName = 'Child Name'
    } else if (mainUserType === 'teacher') {
        placeholderName = 'Student Name'
    }

    return (
        <div id={`subUser_${index}`} className="subUser-input row no-gutters py-2 mr-2">
            <div className="col-lg-4 mb-1 text-input pr-3">
                <CustomInput 
                    type="text"
                    name="subUserName"
                    placeholder={placeholderName}
                    value={input.subUserName}
                    required
                    onChange={(event) => handleChange(event, index)}
                />
            </div>

            <div className="col-lg-4 mb-1 text-input pr-3">
                <div className="d-flex align-items-center">
                    <div className="pr-2">
                        <span className="">Date of Birth</span>
                    </div>
                    <div className="flex-grow-1">
                        <CustomInput
                            type="date"
                            name="dob"
                            value={input.subUserDob}
                            required
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>

            <div className="col-lg-4 mb-1 text-input">
                <CustomInput 
                    type="text"
                    name="subUserSchoolName"
                    placeholder="School Name"
                    value={input.subUserSchoolName}
                    required
                    onChange={handleChange}
                />
            </div>

            <div className="col-lg-4 mb-1 text-input pr-3">
                <CustomInput 
                    type="password"
                    name="subUserPassword"
                    placeholder="Password"
                    value={input.subUserPassword}
                    required
                    onChange={handleChange}
                />
            </div>

            <div className="col-lg-4 mb-1 text-input pr-3">
                <CustomInput 
                    type="password"
                    name="subUserConfirmPassword"
                    placeholder="Confirm Password"
                    value={input.subUserConfirmPassword}
                    required
                    onChange={handleChange}
                />
            </div>

            <div className="col-lg-4 mb-1 text-input">
                <CustomInput 
                    type="email"
                    name="subUserEmail"
                    placeholder="Email Address"
                    value={input.subUserEmail}
                    required
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}

export default (SubUserInputRowItem);