import React, { useState } from 'react'
import "../../../styles/components/authentication/customInput.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-regular-svg-icons'

const CustomInput = ({ type, name, placeholder, value, required, onChange, 
    containerClassName, inputClassName }) => {

    return (
        
        <div className={`input-container ${containerClassName}`}>
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
                className={`input-field p-1 pr-4 ${inputClassName}`}
                value={value}
                required={required}
                onChange={onChange}
            />
        </div>
    )
}

export default (CustomInput);

