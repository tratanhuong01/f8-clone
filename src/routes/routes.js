import { PAGE_BLOG, PAGE_COURSE_DETAIL, PAGE_HOME, PAGE_LOGIN, PAGE_ROUTES, PAGE_ROUTE_DETAIL, PAGE_STUDY } from "../constants/constants";
import Blog from "../pages/Blog";
import CourseDetail from "../pages/CourseDetail";
import Home from "../pages/Home";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Route from "../pages/Route";
import RouteDetail from "../pages/RouteDetail";
import Study from "../pages/Study";

const routes = [
    {
        id: 0,
        element: <Login />,
        path: PAGE_LOGIN,
        exact: true
    },
    {
        id: 1,
        element: <Home />,
        path: PAGE_HOME,
        exact: true
    },
    {
        id: 2,
        element: <Route />,
        path: PAGE_ROUTES,
        exact: true
    },
    {
        id: 3,
        element: <Study />,
        path: PAGE_STUDY,
        exact: true
    },
    {
        id: 4,
        element: <Blog />,
        path: PAGE_BLOG,
        exact: true
    },
    {
        id: 5,
        element: <CourseDetail />,
        path: PAGE_COURSE_DETAIL,
        exact: true
    },
    {
        id: 6,
        element: <RouteDetail />,
        path: PAGE_ROUTE_DETAIL,
        exact: true
    },
    {

        id: 'notFound',
        element: <NotFound />,
        path: '*',
        exact: true
    }
];

export default routes;