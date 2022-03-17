import React, { useContext, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { AuthContext } from '../../../contexts/AuthContext/AuthContext'
import ButtonComponent from '../../core/ButtonComponent'
import InputComponent from '../../core/InputComponent'
import { yupResolver } from '@hookform/resolvers/yup';
import * as validations from './validations';
const FormLogin = () => {
    // 
    const { authsDispatch, authsAction, auth, auth: { isLogin, isEmail } } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: yupResolver(
            !isEmail ? validations.schemaSignInPhone : validations.schemaSignInEmail
        ),
        mode: "onChange",
    });
    useEffect(() => {
        reset();
    }, [auth, reset])
    //
    return (
        <form className='form-login' handleSubmit={handleSubmit}>
            {!isLogin && <InputComponent label='Họ tên' type='text' placeholder='Họ tên'
                register={register} error={errors} name='fullName' className='form-login-input' />}
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
                        <InputComponent type='text' placeholder='Địa chỉ email' register={register}
                            name='email' error={errors} className='form-login-input' />
                        <InputComponent type='password' placeholder='Mật khẩu' register={register}
                            name='password' error={errors} className='form-login-input' />
                    </> :
                    <>
                        <div className='form-login-number-phone'>
                            <div className='form-login-number-phone-left'>
                                VN +84 <i className='bx bx-chevron-down'></i>
                            </div>
                            <InputComponent register={register} name='phone'
                                error={errors} type='text' placeholder='Số điện thoại' />
                        </div>
                        <div className='form-login-code'>
                            <InputComponent register={register} name='code'
                                error={errors} type='text' placeholder='Mã xác nhận' />
                            <ButtonComponent disabled>Gửi mã</ButtonComponent>
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