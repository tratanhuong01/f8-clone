import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import FeedBack from '../components/core/FeedBack'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomeLeft from '../components/Home/HomeLeft'

const WrapperPage = ({ children, notFound }) => {
    //
    const refMenu = useRef();
    const [showMenu, setShowMenu] = useState(false);
    const location = useLocation();
    useEffect(() => {
        //
        window.scrollTo(0, 0);
        if (refMenu.current) {
            refMenu.current.parentElement.style.display = 'none';
        }
        //
    }, [location.pathname])
    //
    return (
        <div className='wrapper'>
            <Header notFound={notFound} setShowMenu={(data) => {
                let timeOut;
                if (data) {
                    refMenu.current.parentElement.style.display = `block`;
                    refMenu.current.style.animation = `show 0.7s`
                    setShowMenu(data);
                }
                else {
                    refMenu.current.style.animation = `hide 0.7s`;
                    timeOut = setTimeout(() => {
                        setShowMenu(data);
                        refMenu.current.parentElement.style.display = `none`;
                    }, 700);
                }
                return () => {
                    clearTimeout(timeOut);
                }
            }} showMenu={showMenu} />
            {<HomeLeft responsive ref={refMenu} />}
            {notFound ? children :
                <>
                    <div className='home'>
                        <HomeLeft />
                        {/* <div className='home-left-fake'>
                        </div> */}
                        {children}
                    </div>
                </>}
            <Footer />
            <FeedBack />
        </div>
    )
}

export default WrapperPage