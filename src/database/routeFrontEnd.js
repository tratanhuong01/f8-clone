import item_course from '../assets/images/item_course.png';
import { v4 } from 'uuid';
import html_css from '../assets/images/html_css.png';
import responsive from '../assets/images/responsive.png';
import js_basic from '../assets/images/js_basic.png';
import js_advanced from '../assets/images/js_advanced.png';
import reactjs from '../assets/images/reactjs.png';

const routesFrontEnd = [
    {
        id: v4(),
        title: 'Tìm hiểu về ngành IT',
        description: 'Để theo ngành IT - Phần mềm cần rèn luyện những kỹ năng nào? Bạn đã có sẵn tố chất phù hợp với ngành chưa? Cùng thăm quan các công ty IT và tìm hiểu về văn hóa, tác phong làm việc của ngành này nhé các bạn.',
        child: [
            {
                id: v4(),
                title: 'Kiến Thức Nhập Môn IT',
                image: item_course,
                description: 'Để có cái nhìn tổng quan về ngành IT - Lập trình web các bạn nên xem các videos tại khóa này trước nhé.'
            }
        ]
    },
    {
        id: v4(),
        title: 'HTML và CSS',
        description: 'Để học web Front-end chúng ta luôn bắt đầu với ngôn ngữ HTML và CSS, đây là 2 ngôn ngữ có mặt trong mọi website trên internet. Trong khóa học này F8 sẽ chia sẻ từ những kiến thức cơ bản nhất. Sau khóa học này bạn sẽ tự làm được 2 giao diện websites là The Band và Shopee.',
        child: [
            {
                id: v4(),
                title: 'HTML, CSS từ Zero đến Hero',
                image: html_css,
                description: 'Trong khóa này chúng ta sẽ cùng nhau xây dựng giao diện 2 trang web là The Band & Shopee.'
            },
            {
                id: v4(),
                title: 'Responsive Với Grid System',
                image: responsive,
                description: 'Trong khóa này chúng ta sẽ học về cách xây dựng giao diện web responsive với Grid System, tương tự Bootstrap 4.'
            }
        ]
    },
    {
        id: v4(),
        title: 'JavaScript',
        description: 'Với HTML, CSS bạn mới chỉ xây dựng được các websites tĩnh, chỉ bao gồm phần giao diện và gần như chưa có xử lý tương tác gì. Để thêm nhiều chức năng phong phú và tăng tính tương tác cho website bạn cần học Javascript.',
        child: [
            {
                id: v4(),
                title: 'Lập Trình JavaScript Cơ Bản',
                image: js_basic,
                description: 'Học Javascript cơ bản phù hợp cho người chưa từng học lập trình. Với hơn 100 bài học và có bài tập thực hành sau mỗi bài học.'
            },
            {
                id: v4(),
                title: 'Lập Trình JavaScript Nâng Cao',
                image: js_advanced,
                description: 'Hiểu sâu hơn về cách Javascript hoạt động, tìm hiểu về IIFE, closure, reference types, this keyword, bind, call, apply, prototype, ...'
            }
        ]
    },
    {
        id: v4(),
        title: 'Libraries and Frameworks',
        description: 'Một websites hay ứng dụng hiện đại rất phức tạp, chỉ sử dụng HTML, CSS, Javascript theo cách code thuần (tự code từ đầu tới cuối) sẽ rất khó khăn. Vì vậy các Libraries, Frameworks ra đời nhằm đơn giản hóa, tiết kiệm chi phí và thời gian để hoàn thành một sản phẩm website hoặc ứng dụng mobile.',
        child: [
            {
                id: v4(),
                title: 'Xây Dựng Website với ReactJS',
                image: reactjs,
                description: 'Khóa học ReactJS từ cơ bản tới nâng cao, kết quả của khóa học này là bạn có thể làm hầu hết các dự án thường gặp với ReactJS. Cuối khóa học này bạn sẽ sở hữu một dự án giống Tiktok.com, bạn có thể tự tin đi xin việc khi...'
            },
        ]
    }
]

export default routesFrontEnd;