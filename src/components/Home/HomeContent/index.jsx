import React from 'react'
import itemList from '../../../database/itemList'
import HomeSlider from '../HomeSlider'
import ListItemHomeContent from './ListItemHomeContent'

const HomeContent = () => {

    return (
        <div className='home-content'>
            <HomeSlider />
            <div className='home-content-main'>
                {itemList.map(item =>
                    <ListItemHomeContent item={item} key={item.id} />
                )}
            </div>
        </div>
    )
}

export default HomeContent