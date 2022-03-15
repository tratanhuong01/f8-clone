import React, { useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthContext/AuthContext'
import ButtonComponent from '../../core/ButtonComponent'
import InputComponent from '../../core/InputComponent'

const FormLogin = () => {
    // 
    const { authsDispatch, authsAction, auth: { isLogin, isEmail } } = useContext(AuthContext);
    //
    return (
        <form className='form-login'>
            {!isLogin && <InputComponent label='Họ tên' type='text' placeholder='Họ tên' className='form-login-input' />}
            <div className='form-login-top'>
                <span>{isEmail ? 'Email' : 'Số điện thoại'}</span>
                <span onClick={() => authsDispatch(authsAction.updateData('isEmail', !isEmail))}>
                    {isEmail ? `Đăng ${isLogin ? 'nhập' : 'ký'} với số điện thoại` :
                        `Đăng ${isLogin ? 'nhập' : 'ký'} với email`}
                </span>
            </div>
            {
                isEmail ?
                    <>
                        <InputComponent type='text' placeholder='Địa chỉ email' className='form-login-input' />
                        <InputComponent type='password' placeholder='Mật khẩu' className='form-login-input' />
                    </> :
                    <>
                        <div className='form-login-number-phone'>
                            <div className='form-login-number-phone-left'>
                                VN +84 <i className='bx bx-chevron-down'></i>
                            </div>
                            <div className='form-login-number-phone-container'>
                                <InputComponent type='text' placeholder='Số điện thoại' />
                            </div>
                        </div>
                        <div className='form-login-code'>
                            <div className='form-login-code-left'>
                                <InputComponent type='text' placeholder='Mã xác nhận' />
                                <ButtonComponent disabled>Gửi mã</ButtonComponent>
                            </div>
                        </div>
                    </>
            }
            <ButtonComponent type='button' className='form-login-button'>
                {isLogin ? 'Đăng nhập' : 'Đăng kí'}
            </ButtonComponent>
        </form >
    )
}

export default FormLogin