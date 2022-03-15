import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/images/logo.png";
import { PAGE_LOGIN } from '../../constants/constants';
import ButtonComponent from '../core/ButtonComponent';
import InputComponent from '../core/InputComponent';

const Header = () => {
    //
    const nav = useNavigate();
    //
    return (
        <div className='header'>
            <div className="header-left">
                <img src={logo} alt="" srcSet="" />
                <span>Học Lập Trình Để Đi Làm</span>
            </div>
            <div className="header-center">
                <div className='header-center-wrapper'>
                    <InputComponent type='text' placeholder='Tim kiếm khóa học, bài viết, video,...' search className='' />
                </div>
            </div>
            <div className="header-right">
                <ButtonComponent type='button' handleClick={() => {
                    nav(PAGE_LOGIN)
                }}>Đăng nhập</ButtonComponent>
            </div>
        </div>
    )
}

export default Header