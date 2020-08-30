import React, { useState } from 'react'
import ParentInputContainer from "./ParentInputContainer"
import TeacherInputContainer from "./TeacherInputContainer"
import CustomInput from "../../components/authentication/CustomInput"
import Authentication from "../../../apis/authentication"

import IndividualRadioButton from "../../../assets/images/Register/MDM2020_07_05_REGISTER-28.png"
import IndividualRadioButtonActive from "../../../assets/images/Register/MDM2020_07_05_REGISTER-31.png"
import ParentRadioButton from "../../../assets/images/Register/parent_inactive.png"
import ParentRadioButtonActive from "../../../assets/images/Register/parent_active.png"
import TeacherRadioButton from "../../../assets/images/Register/teacher_inactive.png"
import TeacherRadioButtonActive from "../../../assets/images/Register/teacher_active.png"
import BtnRegister from "../../../assets/images/Register/btn_register.png"


const RegisterContainer = () => {

    const [formInput, setFormInput] = useState({
        fullname: "",
        phoneNumber: "",
        country: "Malaysia",
        email: "",
        password: "",
        confirmPassword: "",
        dob: "",
        gender: "",
        userType: "individual",
        organization: "",
        isAgreeToTnc: false,
    })

    const postRegister = () => {
        // Dummy data
        const mainUser = {
            "password": "123456",
            "email": "john_doe@gmail.com",
            "gender": 1,
            "name": "Test User",
            "phone_no": "0123874984",
            "dob": "1991-01-19"
        };

        const subUsers = [
            {
                "password": "123456",
                "email": "john_doe2@gmail.com",
                "gender": 1,
                "name": "Test 002",
                "phone_no": "0123456789",
                "dob": "1991-01-19"
            }
        ];

        Authentication.postRegister(mainUser, subUsers)
            .then(response => {
                const { code: responseCode } = response;

                // if success, return success type
                if (responseCode === 200) {
                    const { data } = response;
                    console.log(data);
                }
                
                // if fail, return fail type
                if (responseCode !== 200) {
                    const { errors } = response;
                    console.log(`PostRegister: ${responseCode} - ${errors}`)
                }
            })
            .catch(error => {
                console.log(`PostRegister: ${error}`)
            })
    }

    const handleChange = event => {
        setFormInput({ ...formInput, [event.target.name]: event.target.value });
    }

    const handleUserTypeChange = value => {
        setFormInput({ ...formInput, userType: value });
    }

    const handleRegister = (event) => {
        event.preventDefault();
        postRegister();
    }

    const RegisterComponent = () => {
        return (
            <div id="register_cta" className="d-flex justify-content-end align-items-center">
                <input 
                    type="checkbox"
                    name="isAgreeToTnc"
                    onChange={() => setFormInput({ ...formInput, isAgreeToTnc: !formInput.isAgreeToTnc })}
                    checked={formInput.isAgreeToTnc}
                    className="custom-register-cb mr-2 mt-1"
                />
                <div className="btn-register-wrapper">
                    <span className="text-tnc pr-2">
                        I agree to the <a href="">Terms and Conditions</a>
                    </span>
                    <button type="submit" className="custom-btn-register px-4">
                        REGISTER
                    </button>
                </div>
                

            </div>
        )
    }

    const renderBasedOnUserType = () => {
        switch (formInput.userType) {
            case 'parent':
                return (
                    <ParentInputContainer>
                        <RegisterComponent />
                    </ParentInputContainer>
                );
            case 'teacher':
                return (
                    <TeacherInputContainer>
                        <RegisterComponent />
                    </TeacherInputContainer>
                );
            default:
                return <RegisterComponent />
        }
    }

    return (
        <div id="register_container" className="border rounded ml-5 px-3 py-1 bg-light">
            <div id="register_title" className="text-header mb-1">
                <div className="d-flex align-items-center">
                    <h3 className="mb-0">
                        REGISTRATION 
                    </h3>
                    <div className="border-vertical mx-2" />
                    <h3 className="mb-0">
                        #MYDIGITALMAKERFAIR
                    </h3>
                </div>
            </div>
            

            <form id="register_form" onSubmit={handleRegister}>
                <div className="row no-gutters mb-2">
                    <div className="col-lg-6 pr-3 mb-1 text-input">
                        <CustomInput
                            type="text"
                            name="fullname"
                            placeholder="Full Name"
                            value={formInput.fullname}
                            required
                            onChange={handleChange}
                        />
                    </div>
                    
                    <div className="col-lg-3 pr-3 mb-1 text-input">
                        <CustomInput
                            type="text"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            value={formInput.phoneNumber}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-lg-3 mb-1 text-input">
                        <div className="d-flex align-items-center p-2">
                            <span className="pr-2">Country</span>
                            <span className="bg-white text-center w-100">Malaysia</span>
                        </div>
                    </div>

                    <div className="col-lg-4 pr-3 mb-1 text-input">
                        <CustomInput
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formInput.email}
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-lg-5 pr-3 mb-1 text-input">
                        <div className="d-flex align-items-center">
                            <div className="pr-2">
                                <span className="">Date of Birth</span>
                            </div>
                            <div className="flex-grow-1">
                                <CustomInput
                                    type="date"
                                    name="dob"
                                    value={formInput.dob}
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 mb-1 text-input">
                        <div className="d-flex align-items-center p-2">
                            <span className="pr-2">State</span>
                            <span className="bg-white text-center w-100">Selangor</span>
                        </div>
                    </div>

                    <div className="col-lg-4 pr-3 mb-1 text-input">
                        <CustomInput
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formInput.password}
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-lg-4 pr-3 mb-1 text-input">
                        <CustomInput
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formInput.confirmPassword}
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-lg-2 pr-3 mb-1 text-input">
                        <CustomInput
                            type="text"
                            name="gender"
                            placeholder="Gender"
                            value={formInput.gender}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                
                <div className="row mb-2">
                    <div className="pr-3 col-2 col-lg-2 btn-radio-img"
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleUserTypeChange("individual")}>
                        <input
                            type="radio"
                            style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
                        />
                        <img 
                            src={formInput.userType === "individual" ? IndividualRadioButtonActive : IndividualRadioButton} 
                            alt="Individual" 
                            className="img img-fluid"
                        />
                    </div>

                    <div className="pr-3 col-2 col-lg-2 btn-radio-img"
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleUserTypeChange("parent")}>
                        <input 
                            type="radio"
                            style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
                        />
                        <img 
                            src={formInput.userType === "parent" ? ParentRadioButtonActive : ParentRadioButton} 
                            alt="Parent" 
                            className="img img-fluid"
                        />
                    </div>

                    <div className="pr-3 col-2 col-lg-2 btn-radio-img"
                        style={{ cursor: 'pointer' }}
                        onClick={() => handleUserTypeChange("teacher")}>
                        <input 
                            type="radio"
                            style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
                        />
                        <img 
                            src={formInput.userType === "teacher" ? TeacherRadioButtonActive : TeacherRadioButton} 
                            alt="Parent" 
                            className="img img-fluid"
                        />
                    </div>

                </div>

                <div className="row mb-3 text-input">
                    <div className="col-lg-4 mb-3">
                        <CustomInput
                            type="text"
                            name="organization"
                            placeholder="School/Institution/Organization"
                            value={formInput.organization}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {renderBasedOnUserType()}

            </form>
        </div>
    )
};

export default (RegisterContainer);
