import React from 'react'
import ButtonComponent from '../components/core/ButtonComponent'
import WrapperPage from './WrapperPage'
import route_1 from '../assets/images/route_1.png'
import route_2 from '../assets/images/route_2.png'
import FooterSecond from '../components/core/FooterSecond'
import TitleContent from '../components/core/TitleContent'

const Route = () => {
    //
    const routes = [
        {
            id: 0,
            label: 'Lộ trình học Front-end',
            description: 'Lập trình viên Front-end là người xây dựng ra giao diện websites. Trong phần này F8 sẽ chia sẻ cho bạn lộ trình để trở thành lập trình viên Front-end nhé.',
            image: route_1
        },
        {
            id: 1,
            label: 'Lộ trình học Back-end',
            description: 'Trái với Front-end thì lập trình viên Back-end là người làm việc với dữ liệu, công việc thường nặng tính logic hơn. Chúng ta sẽ cùng tìm hiểu thêm về lộ trình học Back-end nhé.',
            image: route_2
        }
    ]
    //
    return (
        <WrapperPage>
            <div className="home-content">
                <div className="route">
                    <TitleContent title='Lộ trình học' description={`Để bắt đầu một cách thuận lợi, bạn nên tập trung vào một lộ trình học.
                            Ví dụ: Để đi làm với vị trí “Lập trình viên Front-end” bạn nên tập trung
                            vào lộ trình “Front-end”.`} />
                    <div className='route-center'>
                        {routes.map(item =>
                            <ItemRoute key={item.id} item={item} />
                        )}
                    </div>
                </div>
                <FooterSecond item={{
                    title: 'Tham gia cộng đồng học viên F8 trên Facebook',
                    description: 'Hàng nghìn người khác đang học lộ trình giống như bạn. Hãy tham gia hỏi đáp, chia sẻ và hỗ trợ nhau trong quá trình học nhé.',
                    button: 'Tham gia nhóm'
                }} />
            </div>
        </WrapperPage>
    )
}

const ItemRoute = ({ item }) => {
    return (
        <div className="route-center-item">
            <div className="route-center-item-left">
                <h3>{item.label}</h3>
                <p>{item.description}</p>
                <ButtonComponent>
                    Xem chi tiết
                </ButtonComponent>
            </div>
            <div className="route-center-item-right">
                <img src={item.image} alt="" srcSet="" />
            </div>
        </div>
    )
}

export default Route