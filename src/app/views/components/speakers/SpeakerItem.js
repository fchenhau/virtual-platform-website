import React from 'react'

const SpeakerItem = ({ thumbnail, name, title, description }) => {

    return (
        <div className="px-4 mb-3">
            <div className="speaker-item d-flex flex-column align-items-center">
                <img src={thumbnail} alt={name} 
                    className="img img-fluid speaker-thumbnail" />

                <strong className="text-center text-white text-default">{name}</strong>
                <span className="text-center text-white text-default text-description">{title}</span>
                <span className="text-center text-muted text-default text-description">{description}</span>
            </div>
        </div>
    )
}

export default (SpeakerItem);