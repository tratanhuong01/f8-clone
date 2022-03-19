import React from 'react'
import { useNavigate } from 'react-router-dom'
import FooterSecond from '../components/core/FooterSecond'
import TitleContent from '../components/core/TitleContent'
import ListItemHomeContent from '../components/Home/HomeContent/ListItemHomeContent'
import { PAGE_ROUTES } from '../constants/constants'
import itemList from '../database/itemList'
import WrapperPage from './WrapperPage'

const Study = () => {
    //
    const nav = useNavigate();
    //
    return (
        <WrapperPage>
            <div className="home-content">
                <div className="study">
                    <TitleContent title='Khóa học'
                        description={`Các khóa học được thiết kế phù hợp cho cả người mới, miễn phí, nội dung dễ hiểu.`}
                    />
                    <div className='study-content'>
                        {itemList.filter(dt => dt.type === 'route').map(item =>
                            <ListItemHomeContent item={item} key={item.id} />
                        )}
                    </div>
                    <FooterSecond item={{
                        title: 'Bạn đang tìm kiếm lộ trình học cho người mới?',
                        description: 'Các khóa học được thiết kế phù hợp cho người mới, lộ trình học rõ ràng, nội dung dễ hiểu.',
                        button: 'Xem lộ trình',
                        handleClick: () => nav(PAGE_ROUTES)
                    }} />
                </div>
            </div>
        </WrapperPage>
    )
}

export default Study