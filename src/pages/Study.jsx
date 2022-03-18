import React from 'react'
import FooterSecond from '../components/core/FooterSecond'
import TitleContent from '../components/core/TitleContent'
import ListItemHomeContent from '../components/Home/HomeContent/ListItemHomeContent'
import WrapperPage from './WrapperPage'

const Study = () => {
    return (
        <WrapperPage>
            <div className="home-content">
                <div className="study">
                    <TitleContent title='Khóa học'
                        description={`Các khóa học được thiết kế phù hợp cho cả người mới, miễn phí, nội dung dễ hiểu.`}
                    />
                    <div className='study-content'>
                        <ListItemHomeContent title='Lộ trình học Front-end' isNew type={0} study />
                        <ListItemHomeContent title='Lộ trình học Back-end' type={0} study />
                    </div>
                    <FooterSecond item={{
                        title: 'Bạn đang tìm kiếm lộ trình học cho người mới?',
                        description: 'Các khóa học được thiết kế phù hợp cho người mới, lộ trình học rõ ràng, nội dung dễ hiểu.',
                        button: 'Xem lộ trình'
                    }} />
                </div>
            </div>
        </WrapperPage>
    )
}

export default Study