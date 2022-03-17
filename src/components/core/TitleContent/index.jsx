import React from 'react'

const TitleContent = ({ title, description }) => {
    return (
        <div className="route-top">
            <p className='route-top-title'>{title}</p>
            <p className='route-top-desc'>
                {description}
            </p>
        </div>
    )
}

export default TitleContent