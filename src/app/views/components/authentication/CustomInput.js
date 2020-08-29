import React, { useState } from 'react'
import "../../../styles/components/authentication/customInput.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'

const CustomInput = ({ type, name, placeholder, value, required, onChange }) => {

    return (
        
        <div className="input-container">
            {
                required
                &&
                <div className="icon-container d-flex align-items-start">
                    <FontAwesomeIcon icon={faStar} 
                        className="icon" />
                    <FontAwesomeIcon icon={faStar} 
                        className="icon" />
                </div>
            }
            
            <input 
                type={type}
                name={name}
                placeholder={placeholder}
                className="input-field p-2 pr-4"
                value={value}
                required={required}
                onChange={onChange}
            />
        </div>
    )
}

export default (CustomInput);

