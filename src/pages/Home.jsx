import React from 'react'
import HomeContent from '../components/Home/HomeContent'
import HomeLeft from '../components/Home/HomeLeft'
import WrapperPage from './WrapperPage'

const Home = () => {
    return (
        <WrapperPage>
            <div className='home'>
                <HomeLeft />
                {/* <div className='home-left-fake'>

                </div> */}
                <HomeContent />
            </div>
        </WrapperPage>
    )
}

export default Home