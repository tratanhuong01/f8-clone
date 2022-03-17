import React from 'react'
import route from '../../../assets/images/route.png';
import ButtonComponent from '../ButtonComponent';

const FooterSecond = ({ item }) => {
    return (
        <div className='footer-second route-footer'>
            <div className='route-footer-left'>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <ButtonComponent link=''>
                    {item.button}
                </ButtonComponent>
            </div>
            <div className="route-footer-right">
                <img src={route} alt='' srcSet='' />
            </div>
        </div>
    )
}

export default FooterSecond