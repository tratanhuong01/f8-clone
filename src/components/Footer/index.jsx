import React from 'react'
import logo from "../../assets/images/logo.png";
import img_protected from "../../assets/images/img-protected.png";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-wrapper'>
                <div className='footer-item'>
                    <div className='footer-item-top'>
                        <img src={logo} alt="" srcSet="" />
                        <span>Học Lập Trình Để Đi Làm</span>
                    </div>
                    <div>
                        <p>Điện thoại: 0246.329.1102</p>
                        <p>Email: contact@fullstack.edu.vn</p>
                        <p>Địa chỉ: Nhà D9, lô A10, Nam Trung Yên, Trung Hòa, Cầu Giấy, Hà Nội</p>
                        <img src={img_protected} alt="" srcSet="" />
                    </div>
                </div>
                <div className="footer-item">
                    <h3>VỀ F8</h3>
                    <p>Giới thiệu</p>
                    <p>Cơ hội việc làm</p>
                    <p>Đối tác</p>
                </div>
                <div className="footer-item">
                    <h3>HỖ TRỢ</h3>
                    <p>Liên hệ</p>
                    <p>Bảo mật</p>
                    <p>Điều khoản</p>
                </div>
                <div className="footer-item">
                    <h3>CÔNG TY CỔ PHẦN CÔNG NGHỆ GIÁO DỤC F8</h3>
                    <p>Mã số thuế: 0109922901</p>
                    <p>Ngày thành lập: 04/03/2022</p>
                    <p>Lĩnh vực: Công nghệ, giáo dục, lập trình. F8 xây dựng và phát triển những sản phẩm mạng lại giá trị cho cộng đồng.</p>
                </div>
            </div>
            <div className='footer-end'>
                <div className="footer-end-left">
                    © 2022 F8 - Nền tảng học lập trình số 1 Việt Nam
                </div>
                <ul className="footer-end-right">
                    <li className='bx bxl-youtube'></li>
                    <li className='bx bxl-facebook'></li>
                    <li className='bx bxl-tiktok'></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer