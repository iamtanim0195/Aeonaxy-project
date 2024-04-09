import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/Home";
import Help from "../pages/Help";
import Activity from "../pages/Activity";
import Wallet from "../pages/Wallet";
import Deals from "../pages/Deals";
import SendRequest from "../pages/SendRequest";
import Finance from "../pages/Finance";
import Dashboard from "../pages/Dashboard,";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/Dashboard',
                element: <Dashboard />,
            },
            {
                path: '/Finance',
                element: <Finance />,
            },
            {
                path: '/SendRequest',
                element: <SendRequest />,
            },
            {
                path: '/Deals',
                element: <Deals />,
            },
            {
                path: '/Wallet',
                element: <Wallet />,
            },
            {
                path: '/Activity',
                element: <Activity />,
            },
            {
                path: '/Help',
                element: <Help />,
            },
        ]
    }
]);