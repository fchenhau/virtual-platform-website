import React, { useState } from 'react'
import TeacherInputRowItem from "../../components/authentication/TeacherInputRowItem"

const TeacherInputContainer = ({ children }) => {

    // Use to determine the number of group input
    const [rowItemCount, setrowItemCount] = useState(3)

    const addRowItem = () => {
        let newRowItemCount = rowItemCount + 1;
        setrowItemCount(newRowItemCount);
    }

    const deleteRowItem = () => {
        if (rowItemCount === 1) return;

        let newRowItemCount = rowItemCount - 1;
        setrowItemCount(newRowItemCount);
    }

    return (
        <div id="teacher_input_container" className="border rounded m-5 p-3">

            <div className="d-flex justify-content-end align-items-center mb-2">
                <span>Add more</span>
                <button type="button" className="btn btn-primary btn-sm px-2 mx-2"
                    onClick={addRowItem}>
                    +
                </button>
                <button type="button" className="btn btn-primary btn-sm px-2 mx-2"
                    onClick={deleteRowItem}>
                    -
                </button>
            </div>

            {
                rowItemCount > 0
                &&
                [...new Array(rowItemCount)].map((item, index) => {
                    return (
                        <TeacherInputRowItem 
                            key={index}
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