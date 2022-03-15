import { PAGE_HOME, PAGE_LOGIN } from "../constants/constants";
import Home from "../pages/Home";
import Login from "../pages/Login";

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
    }
];

export default routes;