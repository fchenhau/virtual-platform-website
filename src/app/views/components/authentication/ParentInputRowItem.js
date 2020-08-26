import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"

const ParentInputRowItem = ({ index }) => {

    const [input, setInput] = useState({
        childName: "",
        age: 12,
        schoolName: "",
        password: "",
        confirmPassword: "",
        email: ""
    })

    const handleChange = (event) => {
        setInput({ ...input, [event.target.name]: event.target.value });
    }

    let uniqueClassName = `parent-input-${index}`;

    return (
        <div className={`border mb-3 p-3 bg-light ${uniqueClassName}`}>
            <div className="mb-3">
                <input 
                    type="text"
                    name="childName"
                    placeholder="Child Name"
                    className="form-control"
                    value={input.childName}
                    onChange={(event) => handleChange(event, index)}
                />
            </div>

            <div className="mb-3 d-flex align-items-center">
                <span>Age</span>
                <input 
                    type="number"
                    name="age"
                    placeholder="Age"
                    className="form-control"
                    value={input.age}
                    onChange={(event) => handleChange(event, index)}
                    className="mx-2"
                />
                <span>years</span>
            </div>

            <div className="mb-3">
                <input 
                    type="text"
                    name="schoolName"
                    placeholder="School Name"
                    className="form-control"
                    value={input.schoolName}
                    onChange={(event) => handleChange(event, index)}
                />
            </div>

            <div className="mb-3">
                <input 
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                    value={input.password}
                    onChange={(event) => handleChange(event, index)}
                />
            </div>

            <div className="mb-3">
                <input 
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    className="form-control"
                    value={input.confirmPassword}
                    onChange={(event) => handleChange(event, index)}
                />
            </div>

            <div className="mb-3">
                <input 
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="form-control"
                    value={input.email}
                    onChange={(event) => handleChange(event, index)}
                />
            </div>
        </div>
    )
}

export default (ParentInputRowItem);