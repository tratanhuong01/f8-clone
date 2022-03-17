import React from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonComponent from '../components/core/ButtonComponent'
import { PAGE_HOME } from '../constants/constants'
import WrapperPage from './WrapperPage'

const NotFound = () => {
    //
    const nav = useNavigate();
    //
    return (
        <WrapperPage notFound>
            <div className='not-found'>
                <div className="not-found-wrapper">
                    <p className='not-found-wrapper-title'>Không tìm thấy nội dung 😓</p>
                    <p className='not-found-wrapper-content__1'>URL của nội dung này đã bị thay đổi hoặc không còn tồn tại.</p>
                    <p className='not-found-wrapper-content__2'>Nếu bạn đang lưu URL này, hãy thử truy cập lại từ trang chủ thay vì dùng URL đã lưu.</p>
                    <ButtonComponent handleClick={() => {
                        nav(PAGE_HOME);
                    }} className='not-found-wrapper-button'>
                        Trở lại trang chủ
                    </ButtonComponent>
                </div>
            </div>
        </WrapperPage>
    )
}

export default NotFound