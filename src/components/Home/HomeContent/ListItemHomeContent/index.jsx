import React from 'react'
import { Link } from 'react-router-dom';
import item_course from '../../../../assets/images/item_course.png';
import ButtonComponent from '../../../core/ButtonComponent';
import logo from '../../../../assets/images/logo.png';
import ScrollContainer from 'react-indiana-drag-scroll';

const ListItemHomeContent = ({ title, isNew, type }) => {
    return (
        <div className='course-list'>
            <div className='course-list-top'>
                <div className='course-list-top-left'>
                    <h2>{title}</h2>
                    {isNew && <span className='course-list-top-left-new'>
                        MỚI
                    </span>}
                </div>
                <div className='course-list-top-right'>
                    <Link to=''>Xem chi tiết</Link><i className='bx bx-chevron-right'></i>
                </div>
            </div>
            <ScrollContainer className='course-list-main'>
                {[1, 2, 3, 4, 5, 6].map(item =>
                    <ItemHomeContent key={item} type={type} />
                )}
            </ScrollContainer>
        </div>
    )
}

const ItemHomeContent = ({ type }) => {
    //
    const view = () => {
        switch (type) {
            case 0:
                return 'khoá học';
            case 1:
                return 'bài viết';
            case 2:
                return 'video';
            default:
                return '';
        }
    }
    const footer = () => {
        switch (type) {
            case 0:
                return (<div>
                    <svg width={18} height={18} aria-hidden="true" focusable="false" viewBox="0 0 640 512">
                        <path fill="currentColor" d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z"></path>
                    </svg>
                    12.456
                </div>);
            case 1:
                return (
                    <div>
                        <img src={logo} style={{ borderRadius: '100rem' }} alt='' width={24} height={24} />
                        <b>Son Dang</b>
                        · 2 phút đọc
                    </div>
                )
            case 2:
                return (
                    <div style={{ gap: '2.5rem' }}>
                        <div>
                            <svg aria-hidden="true" focusable="false" width={18} height={18} role="img" viewBox="0 0 576 512"><path fill="currentColor" d="M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z"></path>
                            </svg>
                            12.345
                        </div>
                        <div>
                            <svg aria-hidden="true" focusable="false" width={18} height={18} role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M128 447.1V223.1c0-17.67-14.33-31.1-32-31.1H32c-17.67 0-32 14.33-32 31.1v223.1c0 17.67 14.33 31.1 32 31.1h64C113.7 479.1 128 465.6 128 447.1zM512 224.1c0-26.5-21.48-47.98-48-47.98h-146.5c22.77-37.91 34.52-80.88 34.52-96.02C352 56.52 333.5 32 302.5 32c-63.13 0-26.36 76.15-108.2 141.6L178 186.6C166.2 196.1 160.2 210 160.1 224c-.0234 .0234 0 0 0 0L160 384c0 15.1 7.113 29.33 19.2 38.39l34.14 25.59C241 468.8 274.7 480 309.3 480H368c26.52 0 48-21.47 48-47.98c0-3.635-.4805-7.143-1.246-10.55C434 415.2 448 397.4 448 376c0-9.148-2.697-17.61-7.139-24.88C463.1 347 480 327.5 480 304.1c0-12.5-4.893-23.78-12.72-32.32C492.2 270.1 512 249.5 512 224.1z"></path>
                            </svg>
                            1.448
                        </div>
                        <div>
                            <svg aria-hidden="true" focusable="false" width={18} height={18} role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M256 32C114.6 32 .0272 125.1 .0272 240c0 49.63 21.35 94.98 56.97 130.7c-12.5 50.37-54.27 95.27-54.77 95.77c-2.25 2.25-2.875 5.734-1.5 8.734C1.979 478.2 4.75 480 8 480c66.25 0 115.1-31.76 140.6-51.39C181.2 440.9 217.6 448 256 448c141.4 0 255.1-93.13 255.1-208S397.4 32 256 32z"></path>
                            </svg>
                            234
                        </div>
                    </div>
                )
            default:
                return '';
        }
    }
    //
    return (
        <div className="course-list-main-item">
            <div className='course-list-main-item-image' style={{
                backgroundImage: `url(${item_course})`
            }}>
                {type === 2 &&
                    <>
                        <ButtonComponent className='course-list-main-item-button'>
                            <i className='bx bx-play'></i>
                        </ButtonComponent>
                        <ButtonComponent className='course-list-main-item-button'>
                            03:23
                        </ButtonComponent>
                    </>
                }
                <div>
                    <ButtonComponent>
                        Xem {view()}
                    </ButtonComponent>
                </div>
            </div>
            <div className='course-list-main-item-info'>
                <Link to='' className='' >Kiến Thức Nhập Môn IT</Link>
                {footer()}
            </div>
        </div>
    )
}

export default ListItemHomeContent;