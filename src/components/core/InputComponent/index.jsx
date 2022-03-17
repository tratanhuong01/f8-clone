import React, { useState } from 'react'

const InputComponent = ({ type, placeholder, name, label, error, search, className,
    register, onChange }) => {
    //
    const [show, setShow] = useState(false);
    const Field = typeof register === "function" ? register(name, { required: true }) : () => { };
    const handleChange = (event) => {
        if (typeof onChange === "function") onChange(event)
        if (typeof register === "function") Field.onChange(event);
    }
    //
    return (
        <div className='input'>
            {label && <label className='input-label'>{label}</label>}
            {type === 'password' ?
                <div className='input-password'>
                    <input type={show ? 'text' : type} placeholder={placeholder} name={name}
                        className={`input-default ${className}`} spellCheck={false}
                        onChange={handleChange} {...Field} />
                    <i onClick={() => setShow(!show)} className={`bx bx-${show ? 'show' : 'hide'} input-password-icon`}></i>
                </div>
                : <div className={`input-relative ${search ? 'input-search' : ''}`}>
                    <input type={type} placeholder={placeholder} name={name}
                        className={`input-default ${className}`} spellCheck={false}
                        onChange={handleChange} {...Field} />
                    {search ? <i className='bx bx-search input-relative-icon'></i> : ''}
                </div>}
            {error && error[name] && <p className='input-error'>{error[name].message}</p>}
        </div>
    )
}

export default InputComponent