import React, { useState } from 'react'
import SubUserInputRowItem from "../../components/authentication/SubUserInputRowItem"
import { useDispatch, useSelector } from "react-redux";

const TeacherInputContainer = ({ children }) => {

    const subUsers = useSelector(({ auth }) => auth.subUsers);

    return (
        <div id="teacher_input_container">

            {
                subUsers.length > 0
                &&
                subUsers.map((subUser, index) => {
                    return (
                        <SubUserInputRowItem 
                            key={index}
                            mainUserType="teacher"
                            index={index}
                            name={subUser.name}
                            dob={subUser.dob}
                            schoolName={subUser.school_name}
                            password={subUser.password}
                            confirmPassword={subUser.confirmPassword}
                            email={subUser.email}
                        />
                    )
                })
            }

            { children }
            
        </div>
    )
};

export default (TeacherInputContainer);