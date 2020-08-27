import React, { useState } from 'react'
import ParentInputRowItem from "../../components/authentication/ParentInputRowItem"

const ParentInputContainer = ({ children }) => {

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

    const [parentInput, setParentInput] = useState({
        spouseName: "",
        spouseAge: 12,
        spouseUsername: "",
        spousePassword: "",
        spouseConfirmPassword: "",
        spouseEmail: "",
        children: []
    })

    const handleChange = event => {
        setParentInput({ ...parentInput, [event.target.name]: event.target.value });
    }

    return (
        <div id="parent_input_container" className="border rounded m-5 p-3">

            <div id="spouse_input_container" className="mb-2">
                <div className="mb-3">
                    <input 
                        type="text"
                        name="spouseName"
                        placeholder="Spouse Name"
                        className="form-control"
                        value={parentInput.spouseName}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3 d-flex align-items-center">
                    <span>Age</span>
                    <input 
                        type="number"
                        name="spouseAge"
                        placeholder="Age"
                        className="form-control"
                        value={parentInput.spouseAge}
                        onChange={handleChange}
                        className="mx-2"
                    />
                    <span>years</span>
                </div>

                <div className="mb-3">
                    <input 
                        type="text"
                        name="spouseUsername"
                        placeholder="Username"
                        className="form-control"
                        value={parentInput.spouseUsername}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <input 
                        type="password"
                        name="spousePassword"
                        placeholder="Password"
                        className="form-control"
                        value={parentInput.spousePassword}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <input 
                        type="password"
                        name="spouseConfirmPassword"
                        placeholder="Confirm Password"
                        className="form-control"
                        value={parentInput.spouseConfirmPassword}
                        onChange={handleChange}
                    />
                </div>

                <div className="mb-3">
                    <input 
                        type="email"
                        name="spouseEmail"
                        placeholder="Email Address"
                        className="form-control"
                        value={parentInput.spouseEmail}
                        onChange={handleChange}
                    />
                </div>
            </div>

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
                        <ParentInputRowItem 
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

export default (ParentInputContainer);