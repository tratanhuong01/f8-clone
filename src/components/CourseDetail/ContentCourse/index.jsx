import React, { useState } from 'react'
import { v4 } from 'uuid'

const ContentCourse = () => {
    //
    const [expandAll, setExpandAll] = useState();
    const chapters = [
        {
            id: v4(),
            lessons: [
                {
                    id: v4(),
                    name: 'Mô hình Client - Server là gì?',
                    time: 695
                },
                {
                    id: v4(),
                    name: 'Domain là gì? Tên miền là gì?',
                    time: 634
                }
            ],
            name: 'Khái niệm kỹ thuật cần biết'
        },
        {
            id: v4(),
            lessons: [
                {
                    id: v4(),
                    name: 'Học IT cần có tố chất gì? Góc nhìn khác từ chuyên gia định hướng giáo dục',
                    time: 1450
                },
                {
                    id: v4(),
                    name: 'Sinh viên IT đi thực tập tại doanh nghiệp cần biết những gì?',
                    time: 2091
                },
                {
                    id: v4(),
                    name: 'Trãi nghiệm thực tế sau 2 tháng làm việc tại doanh nghiệp của học viên F8?',
                    time: 2833
                }
            ],
            name: 'Môi trường, con người IT'
        },
        {
            id: v4(),
            lessons: [
                {
                    id: v4(),
                    name: 'Phương pháp học lập trình của admin F8?',
                    time: 1446
                },
                {
                    id: v4(),
                    name: 'Làm sao để có thu nhập cao và đi xa hơn trong ngành IT?',
                    time: 1540
                },
                {
                    id: v4(),
                    name: '8 lời khuyên giúp học lập trình tại F8 hiệu quả hơn!',
                    time: 387
                },
                {
                    id: v4(),
                    name: 'Tại sao nên học trên website này hơn là học Youtube?',
                    time: 494
                }
            ],
            name: 'Phương pháp, định hướng'
        },
        {
            id: v4(),
            lessons: [
                {
                    id: v4(),
                    name: 'Hướng dẫn ứng tuyển xin việc làm',
                    time: 780
                }
            ],
            name: 'Ứng tuyển xin việc làm'
        }
    ];
    const timeChapters = (() => {
        let sec = 0;
        chapters.forEach(chapter => {
            chapter.lessons.forEach(lession => {
                sec += lession.time;
            });
        })
        return { hour: Math.floor(sec / 3600), minute: sec % 60 }
    })();
    const generateTime = (time) => {
        return time < 10 ? `0${time}` : time;
    }
    //
    return (
        <div className='content-course'>
            <div className='content-course-top'>
                <ul>
                    <li><span>{chapters.length}</span> chương</li>
                    <li>•</li>
                    <li><span>{chapters.reduce((prev, cur) => prev + cur.lessons.length, 0)}
                    </span> bài học</li>
                    <li>•</li>
                    <li>Thời lượng <span>{generateTime(timeChapters.hour)} giờ
                        {' ' + generateTime(timeChapters.minute)} phút</span></li>
                </ul>
                <span onClick={() => setExpandAll(!expandAll)} className='content-course-top-right'>
                    {expandAll ? 'Thu nhỏ tất cả' : 'Mở rộng tất cả'}
                </span>
            </div>
            {chapters.map((chapter, index) =>
                <ItemContentCourse index={index} chapter={chapter} key={chapter.id}
                    generateTime={generateTime} chapters={chapters} expandAll={expandAll} />)
            }
        </div>
    )
}

const ItemContentCourse = ({ chapter, chapters, generateTime, index, expandAll }) => {
    //
    const [show, setShow] = useState();
    const generateIndexLession = () => {
        const pos = chapters.findIndex(dt => dt.id === chapter.id);
        if (pos === -1) return 0;
        let start = 0;
        for (let j = 0; j < pos; j++) {
            start += chapters[j].lessons.length;
        }
        return start;
    }
    //
    return (
        <>
            <div onClick={() => setShow(!show)} className="content-course-item">
                <div className='content-course-item-left'>
                    <i className={`bx bx-${show || expandAll ? 'minus' : 'plus'}`}></i>
                    <span>{index + 1}.</span>
                    <span>{chapter.name}</span>
                </div>
                <div className='content-course-item-right'>
                    {chapter.lessons.length} bài học
                </div>
            </div>
            {(show || expandAll) && <ul className="content-course-list">
                {chapter.lessons.map((lesson, index) =>
                    <li key={lesson.id}>
                        <div>
                            <svg viewBox="0 0 512 512"><path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM176 168V344C176 352.7 180.7 360.7 188.3 364.9C195.8 369.2 205.1 369 212.5 364.5L356.5 276.5C363.6 272.1 368 264.4 368 256C368 247.6 363.6 239.9 356.5 235.5L212.5 147.5C205.1 142.1 195.8 142.8 188.3 147.1C180.7 151.3 176 159.3 176 168V168z"></path>
                            </svg>
                            <span>
                                {(generateIndexLession() + (index + 1))}.
                            </span>
                            <span>
                                {lesson.name}
                            </span>
                        </div>
                        <span>
                            {`${generateTime(Math.floor(lesson.time / 60))}:${generateTime(lesson.time % 60)}`}
                        </span>
                    </li>
                )}
            </ul>}
        </>
    )
}

export default ContentCourse