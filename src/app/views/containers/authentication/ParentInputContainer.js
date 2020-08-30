import React, { useState } from 'react'
import SubUserInputRowItem from "../../components/authentication/SubUserInputRowItem"
import { useDispatch, useSelector } from "react-redux";

const ParentInputContainer = ({ children }) => {

    const subUsers = useSelector(({ auth }) => auth.subUsers);

    return (
        <div id="parent_input_container">

            {
                subUsers.length > 0
                &&
                subUsers.map((subUser, index) => {
                    return (
                        <SubUserInputRowItem 
                            key={index}
                            index={index} 
                            mainUserType="parent"
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

export default (ParentInputContainer);