import React from 'react'
import { Link } from 'react-router-dom';
import TitleContent from '../components/core/TitleContent'
import WrapperPage from './WrapperPage'

const Blog = () => {
    //
    const topics = [
        {
            id: 0,
            name: 'Front-end / Mobiles apps'
        },
        {
            id: 1,
            name: 'Back-end / Devops'
        },
        {
            id: 2,
            name: 'UI / UX / Design'
        },
        {
            id: 3,
            name: 'Others'
        }
    ];
    const blog = (index) => {
        return {
            id: (index),
            avatar: 'https://avatar-redirect.appspot.com/google/115663409059082752836?size=400',
            firstName: 'Long',
            lastName: 'Nguyen',
            title: 'Tìm hiểu về HTML và CSS',
            description: 'Bài viết sẽ giới thiệu về HTML, CSS là gì, các thẻ cơ bản HTML, CSS. Mục đích của bài viết để tổng hợp kiến thức cơ bản về HTML, CSS. Hy vọng được thảo luận....',
            time: 'một tháng trước',
            minutes: '17 phút đọc'
        }
    }
    //
    return (
        <WrapperPage>
            <div className="home-content">
                <div className='blog'>
                    <TitleContent title='Bài viết nổi bật'
                        description='Tổng hợp các bài viết chia sẻ về kinh nghiệm tự học lập trình online và các kỹ thuật lập trình web.'
                    />
                    <div className="blog-content">
                        <div className="blog-content-left">
                            {[blog(0), blog(1), blog(2), blog(3)].map(item =>
                                <div key={item.id} className="blog-content-left-item">
                                    <div className='blog-content-left-item-top'>
                                        <img src={item.avatar} alt="" srcSet="" />
                                        <Link to=''>{`${item.firstName} ${item.lastName}`}</Link>
                                    </div>
                                    <div className="blog-content-left-item-title">
                                        {item.title}
                                    </div>
                                    <div className="blog-content-left-item-desc">
                                        {item.description}
                                    </div>
                                    <ul className="blog-content-left-item-footer">
                                        <li>{item.time}</li>
                                        <li>·</li>
                                        <li>{item.minutes}</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div className="blog-content-right">
                            <div className="blog-content-right-top">
                                CÁC CHỦ ĐỀ ĐƯỢC ĐỀ XUẤT
                            </div>
                            <ul className="blog-content-right-item">
                                {topics.map(item =>
                                    <li key={item.id}>{item.name}</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </WrapperPage>
    )
}

export default Blog