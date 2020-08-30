import React, { useState } from 'react'
import SubUserInputRowItem from "../../components/authentication/SubUserInputRowItem"
import { useDispatch, useSelector } from "react-redux";

const ParentInputContainer = ({ children }) => {

    const subUsersCount = useSelector(({ auth }) => auth.subUsersCount);

    return (
        <div id="parent_input_container">

            {
                subUsersCount > 0
                &&
                [...new Array(subUsersCount)].map((item, index) => {
                    return (
                        <SubUserInputRowItem 
                            key={index}
                            mainUserType="parent"
                            index={index} 
                        />
                    )
                })
            }

            { children }
            
        </div>
    )
};

export default (ParentInputContainer);