import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const ButtonComponent = ({ type, link, children, handleClick, className, disabled }) => {
    //
    const refBtn = useRef();
    useEffect(() => {
        //
        if (disabled) {
            if (link) {
                refBtn.current.removeAttribute('href');
            }
        }
        //
    }, [refBtn, link])
    //
    return (
        link ? <Link to={link} className={`button-${disabled ? 'disabled' : 'default'} ${className || ''}`}>
            {children}
        </Link> :
            <button type={type} onClick={() => {
                if (typeof handleClick === "function")
                    handleClick();
            }} className={`button-${disabled ? 'disabled' : 'default'} ${className || ''}`} disabled={disabled}>{children}</button>
    )
}

export default ButtonComponent