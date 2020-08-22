import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { authenticationTypes, authenticationActions } from "../../../states/authentication"
import ParentInputContainer from "./ParentInputContainer"
import TeacherInputContainer from "./TeacherInputContainer"
import CorporateInputContainer from "./CorporateInputContainer"

const RegisterContainer = () => {

    const dispatch = useDispatch();
    const postRegister = () => dispatch(authenticationActions.postRegister());
    const resetPostRegister = () => dispatch(authenticationActions.resetPostRegister());

    const postRegisterResponse = useSelector(({ auth }) => auth.postRegisterResponse);

    useEffect(() => {
        const { type, message } = postRegisterResponse;
        
        if (type === authenticationTypes.POST_REGISTER_SUCCESS) {
            resetPostRegister();
            console.log(message);
        }

        if (type === authenticationTypes.POST_REGISTER_FAIL) {
            resetPostRegister();
            console.log(message);
        }

    }, [postRegisterResponse]);

    const [formInput, setFormInput] = useState({
        fullname: "",
        phoneNumber: "",
        country: "Malaysia",
        email: "",
        username: "",
        password: "",
        confirmPassword: "",
        age: 12,
        userType: "individual",
        organization: "",
        isAgreeToTnc: false,
    })

    const [teacherInput, setTeacherInput] = useState([
        {
            name: "",
            age: "",
            password: "",
            confirmPassword: "",
            email: ""
        }
    ])

    const [corporateInput, setCorporateInput] = useState({
        invitationPasscode: "",
        areaOfParticipation: "",
        addressLine1: "",
        addressLine2: ""
    })

    const handleChange = event => {
        setFormInput({ ...formInput, [event.target.name]: event.target.value });
    }

    const handleRegister = () => {
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
                <button type="button" onClick={handleRegister}
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
            case 'corporate':
                return (
                    <CorporateInputContainer>
                        <RegisterComponent />
                    </CorporateInputContainer>
                );
            default:
                return <RegisterComponent />
        }
    }

    return (
        <div id="register_container" className="border rounded m-5 p-3">
            <h3 className="mb-4">
                Register #mydigitalmaker
            </h3>

            <form id="register_form" className="mb-5 pb-5">
                <div className="mb-3">
                    <input 
                        type="text"
                        name="fullname"
                        placeholder="Full Name"
                        className="form-control"
                        value={formInput.fullname}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <input 
                        type="text"
                        name="phoneNumber"
                        placeholder="Phone Number"
                        className="form-control"
                        value={formInput.phoneNumber}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <input 
                        type="text"
                        name="country"
                        placeholder="Country"
                        className="form-control"
                        value={formInput.country}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3 d-flex align-items-center bg-light p-3">
                    <span className="pr-3">Country</span>
                    <span className="bg-white text-center w-100">Malaysia</span>
                </div>
                
                <div className="mb-3">
                    <input 
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="form-control"
                        value={formInput.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3 d-flex align-items-center">
                    <span>Age</span>
                    <input 
                        type="number"
                        name="age"
                        placeholder="Age"
                        className="form-control"
                        value={formInput.age}
                        onChange={handleChange}
                        className="mx-2"
                    />
                    <span>years</span>
                </div>

                <div className="mb-3">
                    <input 
                        type="text"
                        name="username"
                        placeholder="Username"
                        className="form-control"
                        value={formInput.username}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <input 
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="form-control"
                        value={formInput.password}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <input 
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        className="form-control"
                        value={formInput.confirmPassword}
                        onChange={handleChange}
                    />
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
                    <div className="pr-3">
                        <input 
                            id="radio_corporate"
                            type="radio"
                            name="userType"
                            value="corporate"
                            onChange={handleChange}
                            checked={formInput.userType === "corporate"}
                        />
                        <label htmlFor="radio_corporate">Corporate</label>
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

            </form>

            {renderBasedOnUserType()}
            
        </div>
    )
};

export default (RegisterContainer);