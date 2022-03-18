import React from 'react'
import ButtonComponent from '../components/core/ButtonComponent'
import WrapperPage from './WrapperPage'
import item_course from '../assets/images/item_course.png';
import { v4 } from 'uuid';
import html_css from '../assets/images/html_css.png';
import responsive from '../assets/images/responsive.png';
import js_basic from '../assets/images/js_basic.png';
import js_advanced from '../assets/images/js_advanced.png';
import reactjs from '../assets/images/reactjs.png';
import { useNavigate } from 'react-router-dom';
import { PAGE_COURSE_DETAIL } from '../constants/constants';

const routesFrontEnd = [
    {
        id: v4(),
        title: 'Tìm hiểu về ngành IT',
        description: 'Để theo ngành IT - Phần mềm cần rèn luyện những kỹ năng nào? Bạn đã có sẵn tố chất phù hợp với ngành chưa? Cùng thăm quan các công ty IT và tìm hiểu về văn hóa, tác phong làm việc của ngành này nhé các bạn.',
        child: [
            {
                id: v4(),
                title: 'Kiến Thức Nhập Môn IT',
                image: item_course,
                description: 'Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.'
            }
        ]
    },
    {
        id: v4(),
        title: 'HTML và CSS',
        description: 'Để học web Front-end chúng ta luôn bắt đầu với ngôn ngữ HTML và CSS, đây là 2 ngôn ngữ có mặt trong mọi website trên internet. Trong khóa học này F8 sẽ chia sẻ từ những kiến thức cơ bản nhất. Sau khóa học này bạn sẽ tự làm được 2 giao diện websites là The Band và Shopee.',
        child: [
            {
                id: v4(),
                title: 'HTML, CSS từ Zero đến Hero',
                image: html_css,
                description: 'Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee.'
            },
            {
                id: v4(),
                title: 'Responsive Với Grid System',
                image: responsive,
                description: 'Trong khóa này chúng ta sẽ học về cách xây dựng giao diện web responsive với Grid System, tương tự Bootstrap 4.'
            }
        ]
    },
    {
        id: v4(),
        title: 'JavaScript',
        description: 'Với HTML, CSS bạn mới chỉ xây dựng được các websites tĩnh, chỉ bao gồm phần giao diện và gần như chưa có xử lý tương tác gì. Để thêm nhiều chức năng phong phú và tăng tính tương tác cho website bạn cần học Javascript.',
        child: [
            {
                id: v4(),
                title: 'Lập Trình JavaScript Cơ Bản',
                image: js_basic,
                description: 'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học.'
            },
            {
                id: v4(),
                title: 'Lập Trình JavaScript Nâng Cao',
                image: js_advanced,
                description: 'Hiểu sâu hơn về cách Javascript hoạt động, tìm hiểu về IIFE, closure, reference types, this keyword, bind, call, apply, prototype, ...'
            }
        ]
    },
    {
        id: v4(),
        title: 'Libraries and Frameworks',
        description: 'Một websites hay ứng dụng hiện đại rất phức tạp, chỉ sử dụng HTML, CSS, Javascript theo cách code thuần (tự code từ đầu tới cuối) sẽ rất khó khăn. Vì vậy các Libraries, Frameworks ra đời nhằm đơn giản hóa, tiết kiệm chi phí và thời gian để hoàn thành một sản phẩm website hoặc ứng dụng mobile.',
        child: [
            {
                id: v4(),
                title: 'Xây Dựng Website với ReactJS',
                image: reactjs,
                description: 'Khóa học ReactJS từ cơ bản tới nâng cao, kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS. Cuối khóa học này bạn sẽ sở hữu một dự án giống Tiktok.com, bạn có thể tự tin đi xin việc khi...'
            },
        ]
    }
]

const RouteDetail = () => {
    return (
        <WrapperPage>
            <div className="home-content">
                <div className="route-detail">
                    <h1 className='route-detail-title'>Lộ trình học Front-end</h1>
                    <p className='route-detail-desc'>Hầu hết các websites hoặc ứng dụng di động đều có 2 phần là Front-end và
                        Back-end. Front-end là phần giao diện người dùng nhìn thấy và có thể tương
                        tác, đó chính là các ứng dụng mobile hay những website bạn đã từng sử dụng.
                        Vì vậy, nhiệm vụ của lập trình viên Front-end là xây dựng các giao diện đẹp,
                        dễ sử dụng và tối ưu trải nghiệm người dùng.
                    </p>
                    <p className='route-detail-desc'>
                        Tại Việt Nam, <span>lương trung bình </span> cho lập trình viên front-end vào khoảng
                        <span> 16.000.000đ</span> / tháng.
                    </p>
                    <p className="route-detail-desc">
                        Dưới đây là các khóa học F8 đã tạo ra dành cho bất cứ ai theo đuổi sự nghiệp trở thành một lập trình viên Front-end.
                    </p>
                    <p className='route-detail-end-desc'>
                        Các khóa học có thể chưa đầy đủ, F8 vẫn đang nỗ lực hoàn thiện trong thời gian sớm nhất.
                    </p>
                    {routesFrontEnd.map((item, index) =>
                        <ItemRouteDetail item={item} key={item.id} index={index} />
                    )}
                </div>
            </div>
        </WrapperPage>
    )
}

const ItemRouteDetail = ({ item, index }) => {
    //
    const nav = useNavigate();
    //
    return (
        <>
            <h2 className='route-detail-title_'>{index + 1}. {item.title}</h2>
            <p className='route-detail-desc_'>
                {item.description}
            </p>
            {item.child.map(data =>
                <div className='route-detail-box'>
                    <img src={data.image} alt="" srcset="" />
                    <div className="route-detail-box-right">
                        <h3>
                            {data.title}
                        </h3>
                        <p>{data.description}</p>
                        <ButtonComponent handleClick={() => nav(PAGE_COURSE_DETAIL)}>
                            Xem khoá học
                        </ButtonComponent>
                    </div>
                </div>
            )}
        </>
    )
}

export default RouteDetail