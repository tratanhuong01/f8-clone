import React from 'react'
import HomeSlider from '../HomeSlider'
import ListItemHomeContent from './ListItemHomeContent'

const HomeContent = () => {
    return (
        <div className='home-content'>
            <HomeSlider />
            <div className='home-content-main'>
                <ListItemHomeContent title='Lộ trình học Front-end' isNew type={0} />
                <ListItemHomeContent title='Lộ trình học Front-end' type={0} />
                <ListItemHomeContent title='Lộ trình học Front-end' isNew type={1} />
                <ListItemHomeContent title='Lộ trình học Front-end' isNew type={2} />
            </div>
        </div>
    )
}

export default HomeContent