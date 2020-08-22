import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import TeacherInputRowItem from "../../components/authentication/TeacherInputRowItem"

const TeacherInputContainer = ({ children }) => {

    // Use to determine the number of group input
    const [rowItemNumber, setRowItemNumber] = useState(3)

    return (
        <div id="teacher_input_container" className="border rounded m-5 p-3">

            <form id="teacher_input_form" className="mb-5 pb-5">
                {
                    rowItemNumber > 0
                    &&
                    [...new Array(rowItemNumber)].map((item, index) => {
                        return (
                            <TeacherInputRowItem 
                                key={index}
                                index={index} 
                            />
                        )
                    })
                }

                { children }

            </form>
            
        </div>
    )
};

export default (TeacherInputContainer);