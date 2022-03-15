import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const WrapperPage = ({ children }) => {
    return (
        <div className='wrapper'>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default WrapperPage