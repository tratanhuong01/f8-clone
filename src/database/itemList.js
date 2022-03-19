import item_course from '../assets/images/item_course.png'
import { v4 } from 'uuid'
import html_css from '../assets/images/html_css.png'
import responsive from '../assets/images/responsive.png'
import js_basic from '../assets/images/js_basic.png'
import js_advanced from '../assets/images/js_advanced.png'
import reactjs from '../assets/images/reactjs.png'
import nodejs from '../assets/images/nodejs.png'
import blog_1 from '../assets/images/blog_1.png'
import blog_2 from '../assets/images/blog_2.png'
import blog_3 from '../assets/images/blog_3.png'
import blog_4 from '../assets/images/blog_4.png'
import blog_5 from '../assets/images/blog_5.png'
import video_1 from '../assets/images/video_1.jpeg'
import video_2 from '../assets/images/video_2.jpeg'
import video_3 from '../assets/images/video_3.jpeg'

const itemList = [
    {
        id: v4(),
        title: 'Lộ trình học Front-end',
        data: [
            {
                id: v4(),
                title: 'Kiến Thức Nhập Môn IT',
                image: item_course,
                view: 69697
            },
            {
                id: v4(),
                title: 'HTML, CSS từ Zero đến Hero',
                image: html_css,
                view: 236946
            },
            {
                id: v4(),
                title: 'Responsive Với Grid System',
                image: responsive,
                view: 29359
            },
            {
                id: v4(),
                title: 'Lập Trình JavaScript Cơ Bản',
                image: js_basic,
                view: 151028
            },
            {
                id: v4(),
                title: 'Lập Trình JavaScript Nâng Cao',
                image: js_advanced,
                view: 20529
            },
            {
                id: v4(),
                title: 'Xây Dựng Website với ReactJS',
                image: reactjs,
                view: 48525
            }
        ],
        isNew: true,
        type: 'route'
    },
    {
        id: v4(),
        title: 'Lộ trình học Back-end',
        data: [
            {
                id: v4(),
                title: 'Kiến Thức Nhập Môn IT',
                image: item_course,
                view: 69697
            },
            {
                id: v4(),
                title: 'HTML, CSS từ Zero đến Hero',
                image: html_css,
                view: 236946
            },
            {
                id: v4(),
                title: 'Lập Trình JavaScript Cơ Bản',
                image: js_basic,
                view: 151028
            },
            {
                id: v4(),
                title: 'Lập Trình JavaScript Nâng Cao',
                image: js_advanced,
                view: 20529
            },
            {
                id: v4(),
                title: 'Node & ExpressJS',
                image: nodejs,
                view: 25015
            }
        ],
        isNew: true,
        type: 'route'
    },
    {
        id: v4(),
        title: 'Bài viết nổi bật',
        data: [
            {
                id: v4(),
                title: 'Tổng hợp các sản phẩm của học viên tại F8',
                image: blog_1,
                user: {
                    firstName: 'Sơn',
                    lastName: 'Đặng',
                    avatar: item_course,
                },
                read: 360
            },
            {
                id: v4(),
                title: '[Phần 1] Tạo dự án ReactJS với Webpack và Babel',
                image: blog_2,
                user: {
                    firstName: 'Sơn',
                    lastName: 'Đặng',
                    avatar: item_course,
                },
                read: 720
            },
            {
                id: v4(),
                title: 'Các nguồn tài nguyên hữu ích cho 1 front-end developer',
                image: blog_3,
                user: {
                    firstName: 'Vương',
                    lastName: 'Dương',
                    avatar: reactjs,
                },
                read: 120
            },
            {
                id: v4(),
                title: 'Thời gian và Động lực',
                image: blog_4,
                user: {
                    firstName: 'Dong',
                    lastName: 'Ngo',
                    avatar: js_advanced,
                },
                read: 240
            },
            {
                id: v4(),
                title: 'Cách đưa code lên GitHub và tạo GitHub Pages',
                image: blog_5,
                user: {
                    firstName: 'Minh',
                    lastName: 'Kha',
                    avatar: responsive,
                },
                read: 420
            }
        ],
        isNew: false,
        type: 'blog'
    },
    {
        id: v4(),
        title: 'Videos nổi bật',
        data: [
            {
                id: v4(),
                title: 'Code Thiếu Nhi Battle" Tranh Giành Trà Sữa Size L',
                image: video_1,
                view: 234926,
                like: 5102,
                comment: 180,
                time: 1510
            },
            {
                id: v4(),
                title: 'Sinh viên IT đi thực tập tại doanh nghiệp cần biết những gì?',
                image: video_2,
                view: 183957,
                like: 4907,
                comment: 227,
                time: 2091
            },
            {
                id: v4(),
                title: 'Lần trở lại này F8 sẽ làm gì cho các bạn? Học lập trình để đi làm tại F8 nào!',
                image: video_3,
                view: 17569,
                like: 1966,
                comment: 403,
                time: 396
            }
        ],
        isNew: false,
        type: 'video'
    },
]

export default itemList;