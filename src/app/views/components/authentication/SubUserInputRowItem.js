import React, { useState } from 'react'
import CustomInput from "./CustomInput"
import { useDispatch, useSelector } from "react-redux";
import { authenticationActions } from "../../../states/authentication";

const SubUserInputRowItem = ({ index, mainUserType, name, dob, schoolName, password, confirmPassword, email }) => {

    const dispatch = useDispatch();
    const setSubUser = (index, data) => dispatch(authenticationActions.setSubUser(index, data));

    const handleChange = (event) => {
        setSubUser(index, {[event.target.name]: event.target.value});
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
                    name="name"
                    placeholder={placeholderName}
                    value={name}
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
                            value={dob}
                            required
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>

            <div className="col-lg-4 mb-1 text-input">
                <CustomInput 
                    type="text"
                    name="school_name"
                    placeholder="School Name"
                    value={schoolName}
                    required
                    onChange={handleChange}
                />
            </div>

            <div className="col-lg-4 mb-1 text-input pr-3">
                <CustomInput 
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={password}
                    required
                    onChange={handleChange}
                />
            </div>

            <div className="col-lg-4 mb-1 text-input pr-3">
                <CustomInput 
                    type="password"
                    name="confirm_password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    required
                    onChange={handleChange}
                />
            </div>

            <div className="col-lg-4 mb-1 text-input">
                <CustomInput 
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={email}
                    required
                    onChange={handleChange}
                />
            </div>
        </div>
    )
}

export default (SubUserInputRowItem);