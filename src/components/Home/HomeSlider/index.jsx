import React, { useEffect, useRef, useState } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll';
import slider_1 from "../../../assets/images/slider_1.png";
import slider_2 from "../../../assets/images/slider_2.png";
import slider_3 from "../../../assets/images/slider_3.png";
import slider_4 from "../../../assets/images/slider_4.png";
import ButtonComponent from '../../core/ButtonComponent';

const HomeSlider = () => {
    //
    const sliders = [
        {
            id: 1,
            title: 'F8 trên Facebook',
            content: 'F8 được nhắc tới ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT và có những con người yêu thích lập trình F8 sẽ ở đó.',
            button: 'Truy cập nhóm',
            background: 'linear-gradient(to right, rgb(254, 33, 94), rgb(255, 148, 2))',
            image: slider_1
        },
        {
            id: 2,
            title: 'Học ReactJS Miễn Phí!',
            content: 'Khóa học ReactJS từ cơ bản tới nâng cao. Kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS.',
            button: 'Đăng ký ngay',
            background: 'linear-gradient(to right, rgb(40, 119, 250), rgb(103, 23, 205))',
            image: slider_2
        },
        {
            id: 3,
            title: 'F8 trên Youtube',
            content: 'F8 được nhắc tới ở mọi nơi, ở đâu có cơ hội việc làm cho nghề IT và có những con người yêu thích lập trình F8 sẽ ở đó.',
            button: 'Truy cập kênh',
            background: 'linear-gradient(to right, rgb(254, 33, 94), rgb(255, 148, 2))',
            image: slider_3
        },
        {
            id: 4,
            title: 'Thành Quả của Học Viên',
            content: 'Để đạt được kết quả tốt trong mọi việc ta cần xác định mục tiêu rõ ràng cho việc đó. Học lập trình cũng không là ngoại lệ.',
            button: 'Xem thành quả',
            background: 'linear-gradient(to right, rgb(118, 18, 255), rgb(5, 178, 255))',
            image: slider_4
        }
    ];
    const [slide, setSlide] = useState(0);
    const refContainer = useRef();
    useEffect(() => {
        //
        // let transitionend = () => {
        //     refContainer.current.style.transition = 'none';
        //     refContainer.current.style.transform = 'translateX(-0%)';
        // }
        // if (refContainer.current) {
        //     if (slide + 1 > 3) {
        //         refContainer.current.addEventListener('transitionend', transitionend);
        //     }
        // }
        const interVal = setInterval(() => {
            if (slide + 1 > 3) {
                setSlide(0);
                refContainer.current.style.transition = 'transform 1.5s';
                refContainer.current.style.transform = 'translateX(-0%)';
            }
            else {
                setSlide(slide + 1)
            }

        }, 7000);
        return () => {
            // if (refContainer.current) {
            //     refContainer.current.removeEventListener('transitionend', transitionend);
            // }
            clearInterval(interVal);
        }
        //
    }, [slide], refContainer);
    //
    return (
        <div className="home-slider">

            <ScrollContainer className="home-slider-main" onEndScroll={() => {
            }}>
                <ButtonComponent handleClick={() => setSlide(slide - 1 < 0 ? 3 : slide - 1)}
                    className='home-slider-button home-slider-button-left'>
                    <i className='bx bx-chevron-left'></i>
                </ButtonComponent>
                <div ref={refContainer} className='home-slider-wrapper' style={{ transform: `translateX(-${slide * 100}%)` }}>
                    {sliders.map(slider =>
                        <div key={slider.id} className='home-slider-wrapper-content'
                            style={{ background: slider.background }}>
                            <div className='home-slider-wrapper-content-left'>
                                <div>
                                    <h1>{slider.title}</h1>
                                    <p>{slider.content}</p>
                                    <ButtonComponent>
                                        {slider.button}
                                    </ButtonComponent>
                                </div>
                            </div>
                            <div className='home-slider-wrapper-content-right'>
                                <img src={slider.image} alt='' srcSet='' />
                            </div>
                        </div>
                    )}
                </div>
                <ButtonComponent handleClick={() => setSlide(slide + 1 > 3 ? 0 : slide + 1)}
                    className='home-slider-button home-slider-button-right'>
                    <i className='bx bx-chevron-right'></i>
                </ButtonComponent>
            </ScrollContainer>

        </div >
    )
}

export default HomeSlider