import React, { useState } from 'react'
import SubUserInputRowItem from "../../components/authentication/SubUserInputRowItem"
import { useDispatch, useSelector } from "react-redux";

const TeacherInputContainer = ({ children }) => {

    const subUsersCount = useSelector(({ auth }) => auth.subUsersCount);

    return (
        <div id="teacher_input_container">

            {
                subUsersCount > 0
                &&
                [...new Array(subUsersCount)].map((item, index) => {
                    return (
                        <SubUserInputRowItem 
                            key={index}
                            mainUserType="teacher"
                            index={index}
                        />
                    )
                })
            }

            { children }
            
        </div>
    )
};

export default (TeacherInputContainer);