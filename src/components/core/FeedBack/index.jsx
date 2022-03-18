// import { Modal } from 'antd';
import React, { useState } from 'react'
// import Modal from '../../modal/Modal';
import ButtonComponent from '../ButtonComponent'

const FeedBack = () => {
    //
    const [modal, setModal] = useState();
    //
    return (
        <div className='feedback'>
            <ButtonComponent handleClick={() => setModal(!modal)}>
                Click
            </ButtonComponent>
        </div >
    )
}

export default FeedBack