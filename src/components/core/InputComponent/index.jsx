import React, { useState } from 'react'

const InputComponent = ({ type, placeholder, name, label, error, search, className }) => {
    //
    const [show, setShow] = useState(false);
    //
    return (
        <div className='input'>
            {label && <label className='input-label'>{label}</label>}
            {type === 'password' ?
                <div className='input-password'>
                    <input type={show ? 'text' : type} placeholder={placeholder} name={name}
                        className={`input-default ${className}`} spellCheck={false} />
                    <i onClick={() => setShow(!show)} className={`bx bx-${show ? 'show' : 'hide'} input-password-icon`}></i>
                </div>
                : <div className={`input-relative ${search ? 'input-search' : ''}`}>
                    <input type={type} placeholder={placeholder} name={name}
                        className={`input-default ${className}`} spellCheck={false} />
                    {search ? <i className='bx bx-search input-relative-icon'></i> : ''}
                </div>}
            {error && <p className='input-error'>{error[name]}</p>}
        </div>
    )
}

export default InputComponent