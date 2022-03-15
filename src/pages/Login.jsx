import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import FormLogin from '../components/Login/FormLogin';
import { AuthContext, AuthProvider } from '../contexts/AuthContext/AuthContext';

const data = [
    {
        id: 0,
        svg: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <path d="M10 11c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4m0-9C7.79 2 6 3.79 6 6s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4m0 10.9c2.97 0 6.1 1.46 6.1 2.1v1.1H3.9V15c0-.64 3.13-2.1 6.1-2.1m0-9a2.1 2.1 0 110 4.2 2.1 2.1 0 010-4.2" fill-opacity=".54" fill-rule="evenodd" />
        </svg>,
        name: 'Sử dụng email / số điện thoại',
        handleClick: ({ dispatch, action }) => {
            dispatch(action.updateData('form', true))
            dispatch(action.updateData('child', <FormLogin />));
            dispatch(action.updateData('level', true));
        }
    },
    {
        id: 1,
        svg: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><g transform=""><g fill-rule="evenodd"><path d="m17.64 9.2a10.341 10.341 0 0 0 -.164-1.841h-8.476v3.481h4.844a4.14 4.14 0 0 1 -1.8 2.716v2.264h2.909a8.777 8.777 0 0 0 2.687-6.62z" fill="#4285f4" /><path d="m9 18a8.592 8.592 0 0 0 5.956-2.18l-2.909-2.258a5.43 5.43 0 0 1 -8.083-2.852h-3.007v2.332a9 9 0 0 0 8.043 4.958z" fill="#34a853" /><path d="m3.964 10.71a5.321 5.321 0 0 1 0-3.42v-2.332h-3.007a9.011 9.011 0 0 0 0 8.084z" fill="#fbbc05" /><path d="m9 3.58a4.862 4.862 0 0 1 3.44 1.346l2.581-2.581a8.649 8.649 0 0 0 -6.021-2.345 9 9 0 0 0 -8.043 4.958l3.007 2.332a5.364 5.364 0 0 1 5.036-3.71z" fill="#ea4335" /></g><path d="m0 0h18v18h-18z" fill="none" /></g></svg>,
        name: 'Tiếp tục với google',
        handleClick: (store, setStore) => ""
    },
    {
        id: 2,
        svg: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
            <path d="m17.007 0h-16.014a.993.993 0 0 0 -.993.993v16.014a.993.993 0 0 0 .993.993h8.628v-6.961h-2.343v-2.725h2.343v-2a3.274 3.274 0 0 1 3.494-3.591 19.925 19.925 0 0 1 2.092.106v2.43h-1.428c-1.13 0-1.35.534-1.35 1.322v1.73h2.7l-.351 2.725h-2.364v6.964h4.593a.993.993 0 0 0 .993-.993v-16.014a.993.993 0 0 0 -.993-.993z" fill="#4267b2" />
            <path d="m28.586 24.041v-6.961h2.349l.351-2.725h-2.7v-1.734c0-.788.22-1.322 1.35-1.322h1.443v-2.434a19.924 19.924 0 0 0 -2.095-.106 3.27 3.27 0 0 0 -3.491 3.591v2h-2.343v2.73h2.343v6.961z" fill="#fff" transform="translate(-16.172 -6.041)" />
        </svg>,
        name: 'Tiếp tục với facebook',
        handleClick: (store, setStore) => ""
    },
    {
        id: 3,
        svg: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
            <path d="M10 0C4.476 0 0 4.477 0 10c0 4.418 2.865 8.166 6.84 9.49.5.09.68-.218.68-.483 0-.237-.007-.866-.012-1.7-2.782.603-3.37-1.34-3.37-1.34-.454-1.157-1.11-1.464-1.11-1.464-.907-.62.07-.608.07-.608 1.003.07 1.53 1.03 1.53 1.03.893 1.53 2.342 1.087 2.912.83.09-.645.35-1.085.634-1.335-2.22-.253-4.555-1.11-4.555-4.943 0-1.09.39-1.984 1.03-2.683-.105-.253-.448-1.27.096-2.647 0 0 .84-.268 2.75 1.026A9.555 9.555 0 0110 4.836a9.59 9.59 0 012.504.337c1.91-1.294 2.747-1.026 2.747-1.026.548 1.377.204 2.394.1 2.647.64.7 1.03 1.592 1.03 2.683 0 3.842-2.34 4.687-4.566 4.935.36.308.678.92.678 1.852 0 1.336-.01 2.415-.01 2.743 0 .267.18.578.687.48A10 10 0 0020 10c0-5.522-4.478-10-10-10" fill="#191717" fill-rule="evenodd" />
        </svg>,
        name: 'Tiếp tục với github',
        handleClick: (store, setStore) => ""
    }
]

const Login = () => {
    //
    //
    return (
        <AuthProvider>
            <WrapperLogin />
        </AuthProvider>
    )
}

const WrapperLogin = () => {
    //
    const { auth: { isLogin, isEmail, level, child, form }, authsDispatch, authsAction } = useContext(AuthContext);
    const main = data.map(item => <ItemLogin item={item} key={item.id} data={data} />);
    useEffect(() => {
        //
        authsDispatch(authsAction.updateData('child', main));
        //
    }, [])
    return (
        <div className='login'>
            <div className="login-content">
                {level && <span onClick={() => {
                    authsDispatch(authsAction.updateData('child', main));
                    authsDispatch(authsAction.updateData('level', false));
                }} className='bx bx-chevron-left login-content-previous'></span>}
                <Link to='/' className='login-content-link'>
                    <img src={logo} className='login-content-image' alt='' srcSet='' />
                </Link>
                <h2 className="login-content-title">
                    {isLogin ? form ? 'Chào mừng đến với F8' : 'Đăng nhập vào F8'
                        : 'Đăng ký tài khoản F8'}
                </h2>
                <div className='login-content-main'>
                    {child}
                </div>
                <div className='login-content-footer'>
                    <span>{isLogin ? 'Bạn chưa có' : 'Bạn đã có'} tài khoản? </span>
                    <span onClick={() => authsDispatch(authsAction.updateData('isLogin', !isLogin))}>
                        {isLogin ? 'Đăng ký' : 'Đăng nhập'}</span>
                    {isLogin && level && isEmail && <p className='login-content-footer-forget-password'>
                        Quên mật khẩu ?
                    </p>}
                </div>
            </div>
            <div className="login-footer">
                <Link to='' target="_blank">Giới thiệu về F8</Link><span>|</span>
                <Link to='' target="_blank">F8 trên Youtube</Link><span>|</span>
                <Link to='' target="_blank">F8 trên Facebook</Link>
            </div>
        </div>
    )
}

const ItemLogin = ({ item, data }) => {
    //
    const { authsDispatch, authsAction } = useContext(AuthContext);
    //
    return (
        <div onClick={() => item.handleClick({ action: authsAction, dispatch: authsDispatch, data })}
            className='login-content-main-item'>
            {item.svg()} <span>{item.name}</span>
        </div>
    )
}


export default Login