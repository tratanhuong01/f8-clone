import React from 'react'
import ButtonComponent from '../components/core/ButtonComponent'
import WrapperPage from './WrapperPage'
import { useNavigate } from 'react-router-dom';
import { PAGE_COURSE_DETAIL } from '../constants/constants';
import routeFrontEnd from '../database/routeFrontEnd';

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
                    {routeFrontEnd.map((item, index) =>
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