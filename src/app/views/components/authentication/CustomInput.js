import React, { useState } from 'react'
import "../../../styles/components/authentication/customInput.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const CustomInput = ({ type, name, placeholder, value, required, onChange }) => {

    return (
        
        <div class="input-container">
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
                className="input-field"
                value={value}
                required={required}
                onChange={onChange}
            />
        </div>
    )
}

export default (CustomInput);

