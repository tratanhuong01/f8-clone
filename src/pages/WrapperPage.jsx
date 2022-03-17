import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import HomeLeft from '../components/Home/HomeLeft'

const WrapperPage = ({ children, notFound }) => {
    return (
        <div className='wrapper'>
            <Header notFound={notFound} />
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
        </div>
    )
}

export default WrapperPage