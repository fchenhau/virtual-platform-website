import React, { useState } from 'react'
import ParentInputContainer from "./ParentInputContainer"
import TeacherInputContainer from "./TeacherInputContainer"
import CustomInput from "../../components/authentication/CustomInput"
import Authentication from "../../../apis/authentication"

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

    const handleRegister = (event) => {
        event.preventDefault();
        postRegister();
    }

    const RegisterComponent = () => {
        return (
            <div className="d-flex justify-content-end align-items-center">
                <div className="d-flex align-items-center pr-3">
                    <input 
                        type="checkbox"
                        name="isAgreeToTnc"
                        onChange={() => setFormInput({ ...formInput, isAgreeToTnc: !formInput.isAgreeToTnc })}
                        checked={formInput.isAgreeToTnc}
                    />
                    <span className="px-2">
                        I agree to the <a href="">Terms and Conditions</a>
                    </span>
                </div>
                <button type="submit" 
                    className="btn btn-primary">
                    Register
                </button>
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
        <div id="register_container" className="border rounded m-5 p-3 bg-light">
            <div id="title" className="d-flex align-items-center">
                <div>
                    REGISTRATION 
                </div>
                <div className="border-vertical mx-2" />
                <div>
                    #MYDIGITALMAKERFAIR
                </div>
            </div>
            

            <form id="register_form" className="mb-5 pb-5" onSubmit={handleRegister}>
                <div className="row no-gutters mb-3">
                    <div className="col-lg-6 pr-3 mb-2">
                        <CustomInput
                            type="text"
                            name="fullname"
                            placeholder="Full Name"
                            value={formInput.fullname}
                            required
                            onChange={handleChange}
                        />
                    </div>
                    
                    <div className="col-lg-3 pr-3 mb-2">
                        <CustomInput
                            type="text"
                            name="phoneNumber"
                            placeholder="Phone Number"
                            value={formInput.phoneNumber}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-lg-3 mb-2">
                        <div className="d-flex align-items-center p-2">
                            <span className="pr-2">Country</span>
                            <span className="bg-white text-center w-100">Malaysia</span>
                        </div>
                    </div>

                    <div className="col-lg-6 pr-3 mb-2">
                        <CustomInput
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formInput.email}
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-lg-3 pr-3 mb-2">
                        <CustomInput
                            type="date"
                            name="dob"
                            value={formInput.dob}
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-lg-3 mb-2">
                        <div className="d-flex align-items-center p-2">
                            <span className="pr-2">State</span>
                            <span className="bg-white text-center w-100">Selangor</span>
                        </div>
                    </div>

                    <div className="col-lg-4 pr-3 mb-2">
                        <CustomInput
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={formInput.password}
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-lg-4 pr-3 mb-2">
                        <CustomInput
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formInput.confirmPassword}
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="col-lg-2 pr-3 mb-2">
                        <CustomInput
                            type="text"
                            name="gender"
                            placeholder="Gender"
                            value={formInput.gender}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                
                <div className="mb-3 d-flex align-items-center">
                    <div className="pr-3">
                        <input 
                            id="radio_individual"
                            type="radio"
                            name="userType"
                            value="individual"
                            onChange={handleChange}
                            checked={formInput.userType === "individual"}
                        />
                        <label htmlFor="radio_individual">Individual</label>
                    </div>
                    <div className="pr-3">
                        <input 
                            id="radio_parent"
                            type="radio"
                            name="userType"
                            value="parent"
                            onChange={handleChange}
                            checked={formInput.userType === "parent"}
                        />
                        <label htmlFor="radio_parent">Parent</label>
                    </div>
                    <div className="pr-3">
                        <input 
                            id="radio_teacher"
                            type="radio"
                            name="userType"
                            value="teacher"
                            onChange={handleChange}
                            checked={formInput.userType === "teacher"}
                        />
                        <label htmlFor="radio_teacher">Teacher</label>
                    </div>
                </div>

                <div className="mb-3">
                    <input 
                        type="text"
                        name="organization"
                        placeholder="School/Institution/Organization"
                        className="form-control"
                        value={formInput.organization}
                        onChange={handleChange}
                    />
                </div>

                {renderBasedOnUserType()}

            </form>
        </div>
    )
};

export default (RegisterContainer);
